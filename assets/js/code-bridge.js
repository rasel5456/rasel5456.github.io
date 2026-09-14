(() => {
  const $ = (id) => document.getElementById(id);
  const direction = $('bridgeDirection'), input = $('bridgeInput'), output = $('bridgeOutput');
  const status = $('bridgeStatus'), inputLabel = $('bridgeInputLabel'), outputLabel = $('bridgeOutputLabel');
  const inputCount = $('bridgeInputCount'), outputCount = $('bridgeOutputCount');
  const pythonSample = `numbers = [1, 2, 3, 4, 5]\ntotal = 0\n\nfor number in numbers:\n    total += number\n\nprint("Total:", total)`;
  const cppSample = `#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> numbers = {1, 2, 3, 4, 5};\n    int total = 0;\n\n    for (int number : numbers) {\n        total += number;\n    }\n\n    std::cout << "Total: " << total << std::endl;\n    return 0;\n}`;

  const isPyToCpp = () => direction.value === 'python-cpp';
  const indent = (line) => line.match(/^\s*/)[0].length;
  const cppType = (value) => /^[-+]?\d+(\.\d+)?$/.test(value) ? (value.includes('.') ? 'double' : 'int') : 'std::string';
  const cppString = (s) => s.replace(/^['"]|['"]$/g, '').replace(/"/g, '\\"');

  function pythonToCpp(source) {
    const lines = source.replace(/\r/g, '').split('\n'), body = [], vars = new Map();
    let inMain = false;
    for (let raw of lines) {
      const line = raw.trim(); if (!line) { body.push(''); continue; }
      if (line.startsWith('#')) { body.push('// ' + line.slice(1).trim()); continue; }
      let m;
      if ((m = line.match(/^([A-Za-z_]\w*)\s*=\s*\[([^\]]*)\]$/))) {
        const values = m[2].trim(); const type = values && values.split(',')[0].trim().match(/^\d+$/) ? 'int' : 'std::string';
        body.push(`    std::vector<${type}> ${m[1]} = {${values}};`); vars.set(m[1], 'vector'); continue;
      }
      if ((m = line.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/))) {
        const type = cppType(m[2]); const value = type === 'std::string' ? `"${cppString(m[2])}"` : m[2];
        body.push(`    ${type} ${m[1]} = ${value};`); vars.set(m[1], type); continue;
      }
      if ((m = line.match(/^for\s+([A-Za-z_]\w*)\s+in\s+([A-Za-z_]\w*):$/))) { body.push(`    for (auto ${m[1]} : ${m[2]}) {`); continue; }
      if ((m = line.match(/^while\s+(.+):$/))) { body.push(`    while (${m[1]}) {`); continue; }
      if ((m = line.match(/^if\s+(.+):$/))) { body.push(`    if (${m[1]}) {`); continue; }
      if ((m = line.match(/^elif\s+(.+):$/))) { body.push(`    } else if (${m[1]}) {`); continue; }
      if (line === 'else:') { body.push('    } else {'); continue; }
      if ((m = line.match(/^print\((.*)\)$/))) { const args = m[1].split(',').map(x => x.trim()).join(' << " " << '); body.push(`    std::cout << ${args} << std::endl;`); continue; }
      if ((m = line.match(/^([A-Za-z_]\w*)\s*(\+=|-=|=)\s*(.+)$/))) { body.push(`    ${m[1]} ${m[2]} ${m[3]};`); continue; }
      if ((m = line.match(/^def\s+(\w+)\(([^)]*)\):$/))) { body.push(`    // Function ${m[1]}(${m[2]}) — add an explicit C++ return type`); continue; }
      body.push(`    // TODO: translate manually: ${line}`);
    }
    const result = body.join('\n').replace(/\n\s*\n(?=\s*})/g, '\n');
    return `#include <iostream>\n#include <string>\n#include <vector>\n\nint main() {\n${result.split('\n').map(x => x || '').join('\n')}\n    return 0;\n}`;
  }

  function cppToPython(source) {
    let lines = source.replace(/\r/g, '').split('\n'), out = [], indentLevel = 0;
    for (let raw of lines) {
      let line = raw.trim(); if (!line) { out.push(''); continue; }
      if (/^#include/.test(line) || /^using namespace/.test(line) || line === 'int main() {' || line === '}' || line === 'return 0;') continue;
      if (/^\/\//.test(line)) { out.push(' '.repeat(indentLevel * 4) + '# ' + line.slice(2).trim()); continue; }
      if (line === '} else {' || /^}\s*else if/.test(line)) { indentLevel = Math.max(0, indentLevel - 1); const m = line.match(/else if\s*\((.*)\)/); out.push(' '.repeat(indentLevel * 4) + (m ? `elif ${m[1]}:` : 'else:')); indentLevel++; continue; }
      if (line === '{') { indentLevel++; continue; }
      if (line === '}') { indentLevel = Math.max(0, indentLevel - 1); continue; }
      let m;
      if ((m = line.match(/^(?:std::vector<[^>]+>|vector<[^>]+>)\s+(\w+)\s*=\s*\{(.*)\};$/))) { out.push(' '.repeat(indentLevel * 4) + `${m[1]} = [${m[2]}]`); continue; }
      if ((m = line.match(/^(?:int|double|float|bool|std::string|string|auto)\s+(\w+)\s*=\s*(.*);$/))) { let v = m[2].replace(/^"(.*)"$/, "'$1'"); out.push(' '.repeat(indentLevel * 4) + `${m[1]} = ${v}`); continue; }
      if ((m = line.match(/^for\s+\w+\s+(\w+)\s*:\s*(.*)\s*\{$/))) { out.push(' '.repeat(indentLevel * 4) + `for ${m[1]} in ${m[2]}:`); indentLevel++; continue; }
      if ((m = line.match(/^for\s*\(.*?\s+(\w+)\s*:\s*(\w+)\)\s*\{$/))) { out.push(' '.repeat(indentLevel * 4) + `for ${m[1]} in ${m[2]}:`); indentLevel++; continue; }
      if ((m = line.match(/^while\s*\((.*)\)\s*\{$/))) { out.push(' '.repeat(indentLevel * 4) + `while ${m[1]}:`); indentLevel++; continue; }
      if ((m = line.match(/^if\s*\((.*)\)\s*\{$/))) { out.push(' '.repeat(indentLevel * 4) + `if ${m[1]}:`); indentLevel++; continue; }
      if ((m = line.match(/^std::cout\s*<<\s*(.*?)\s*<<\s*std::endl;$/)) || (m = line.match(/^cout\s*<<\s*(.*?)\s*<<\s*endl;$/))) { out.push(' '.repeat(indentLevel * 4) + `print(${m[1].replace(/\s*<<\s*/g, ', ')})`); continue; }
      if (/^[A-Za-z_]\w*\s*(?:\+=|-=|=)/.test(line)) out.push(' '.repeat(indentLevel * 4) + line.replace(/;$/, ''));
      else out.push(' '.repeat(indentLevel * 4) + `# TODO: translate manually: ${line}`);
    }
    return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  function refreshLabels() { const py = isPyToCpp(); inputLabel.textContent = py ? 'Python input' : 'C++ input'; outputLabel.textContent = py ? 'C++ output' : 'Python output'; }
  function counts() { inputCount.textContent = `${input.value ? input.value.split('\n').length : 0} lines`; outputCount.textContent = `${output.value ? output.value.split('\n').length : 0} lines`; }
  function convert() { refreshLabels(); output.value = isPyToCpp() ? pythonToCpp(input.value) : cppToPython(input.value); counts(); status.textContent = 'Converted locally. Review TODO comments for unsupported constructs.'; }
  direction.addEventListener('change', () => { refreshLabels(); input.value = ''; output.value = ''; counts(); status.textContent = 'Direction changed. Load a sample or paste code.'; });
  $('bridgeConvert').addEventListener('click', convert);
  $('bridgeSample').addEventListener('click', () => { input.value = isPyToCpp() ? pythonSample : cppSample; convert(); });
  $('bridgeSwap').addEventListener('click', () => { const oldInput = input.value, oldOutput = output.value; direction.value = isPyToCpp() ? 'cpp-python' : 'python-cpp'; input.value = oldOutput || (direction.value === 'python-cpp' ? pythonSample : cppSample); output.value = oldInput; refreshLabels(); counts(); status.textContent = 'Editors swapped.'; });
  $('bridgeClear').addEventListener('click', () => { input.value = ''; output.value = ''; counts(); status.textContent = 'Cleared. Your code was never uploaded.'; });
  $('bridgeCopy').addEventListener('click', async () => { if (!output.value) return; try { await navigator.clipboard.writeText(output.value); status.textContent = 'Output copied to clipboard.'; } catch { status.textContent = 'Copy failed; select the output manually.'; } });
  input.addEventListener('input', counts); output.addEventListener('input', counts); refreshLabels(); counts();
})();
