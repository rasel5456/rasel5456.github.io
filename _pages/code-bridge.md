---
layout: page
title: Code Bridge
permalink: /code-bridge/
description: A browser-based Python and C++ code translator.
nav: false
---

<style>
  .bridge-shell{max-width:1100px;margin:0 auto}.bridge-hero{padding:1rem 0 1.4rem}.bridge-kicker{color:#356ae6;font-weight:800;letter-spacing:.12em;font-size:.72rem}.bridge-hero h1{font-size:clamp(2.5rem,6vw,4.8rem);line-height:.98;letter-spacing:-.06em;margin:.7rem 0}.bridge-hero h1 span{color:#356ae6}.bridge-hero p{color:#69758a;font-size:1.08rem;max-width:720px}.bridge-card{border:1px solid #dce4f0;border-radius:20px;padding:1.15rem;background:var(--global-bg-color);box-shadow:0 12px 40px #23395d0b}.bridge-toolbar{display:flex;flex-wrap:wrap;gap:.65rem;align-items:center;margin-bottom:1rem}.bridge-select,.bridge-button{border:1px solid #cbd6e5;border-radius:10px;padding:.65rem .85rem;font:inherit;background:var(--global-bg-color);cursor:pointer}.bridge-button{font-weight:750}.bridge-button.primary{background:#2459d6;border-color:#2459d6;color:white}.bridge-button:hover{filter:brightness(.96)}.bridge-editors{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.bridge-pane{min-width:0}.bridge-pane label{display:flex;justify-content:space-between;font-size:.8rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;margin-bottom:.45rem;color:#63728a}.bridge-pane textarea{width:100%;min-height:360px;box-sizing:border-box;resize:vertical;border:1px solid #cbd6e5;border-radius:12px;padding:1rem;background:#101827;color:#e6edf7;font:14px/1.6 ui-monospace,SFMono-Regular,Menlo,monospace;outline:none}.bridge-pane textarea:focus{border-color:#4e82e8;box-shadow:0 0 0 3px #356ae622}.bridge-status{min-height:1.4em;margin:.85rem 0 0;color:#69758a;font-size:.9rem}.bridge-note{margin-top:1rem;border-left:4px solid #f0b429;background:#fff8e7;padding:.8rem 1rem;color:#66511b;border-radius:0 10px 10px 0}.bridge-features{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;margin-top:1rem}.bridge-feature{padding:.9rem;border:1px solid #e2e8f0;border-radius:12px}.bridge-feature strong{display:block;margin-bottom:.25rem}@media(max-width:760px){.bridge-editors,.bridge-features{grid-template-columns:1fr}.bridge-pane textarea{min-height:260px}}
</style>

<div class="bridge-shell">
  <section class="bridge-hero">
    <div class="bridge-kicker">RASel HOSSEN SAWPON · CODE LAB</div>
    <h1>Translate code<br><span>without leaving your browser.</span></h1>
    <p>Code Bridge converts common Python and C++ patterns locally in your browser. Start with a small snippet, compare both versions, and keep learning.</p>
  </section>

  <section class="bridge-card" aria-label="Code Bridge converter">
    <div class="bridge-toolbar">
      <label for="bridgeDirection" class="sr-only">Conversion direction</label>
      <select id="bridgeDirection" class="bridge-select">
        <option value="python-cpp">Python → C++</option>
        <option value="cpp-python">C++ → Python</option>
      </select>
      <button id="bridgeConvert" class="bridge-button primary" type="button">Convert code</button>
      <button id="bridgeSwap" class="bridge-button" type="button">Swap</button>
      <button id="bridgeSample" class="bridge-button" type="button">Load sample</button>
      <button id="bridgeCopy" class="bridge-button" type="button">Copy output</button>
      <button id="bridgeClear" class="bridge-button" type="button">Clear</button>
    </div>

    <div class="bridge-editors">
      <div class="bridge-pane"><label for="bridgeInput"><span id="bridgeInputLabel">Python input</span><span id="bridgeInputCount">0 lines</span></label><textarea id="bridgeInput" spellcheck="false" aria-label="Source code input"></textarea></div>
      <div class="bridge-pane"><label for="bridgeOutput"><span id="bridgeOutputLabel">C++ output</span><span id="bridgeOutputCount">0 lines</span></label><textarea id="bridgeOutput" spellcheck="false" aria-label="Translated code output" readonly></textarea></div>
    </div>
    <p id="bridgeStatus" class="bridge-status" role="status">Ready. This converter runs locally; your code is not uploaded.</p>
    <div class="bridge-note"><strong>Learning note:</strong> This is an educational MVP for common syntax. Complex libraries, decorators, templates, pointers, and advanced language features may need manual adjustment.</div>
  </section>

  <div class="bridge-features"><div class="bridge-feature"><strong>Private by default</strong><span>Your code stays in this browser.</span></div><div class="bridge-feature"><strong>Two-way workflow</strong><span>Switch direction and compare both languages.</span></div><div class="bridge-feature"><strong>Beginner friendly</strong><span>Use samples to learn the equivalent syntax.</span></div></div>
</div>

<script src="{{ '/assets/js/code-bridge.js' | relative_url }}"></script>
