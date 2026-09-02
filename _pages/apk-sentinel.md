---
layout: page
title: APK Sentinel
permalink: /apk-sentinel/
description: Safe, client-side static APK security triage.
nav: false
---

<style>
  .sentinel-shell{max-width:900px;margin:0 auto}.sentinel-hero{padding:1.5rem 0 1rem}.sentinel-kicker{color:#356ae6;font-weight:800;letter-spacing:.12em;font-size:.72rem}.sentinel-hero h1{font-size:clamp(2.5rem,6vw,4.5rem);line-height:1;letter-spacing:-.06em;margin:.7rem 0}.sentinel-hero h1 span{color:#356ae6}.sentinel-hero p{color:#69758a;font-size:1.08rem;max-width:650px}.sentinel-notice{background:#fff8e7;border:1px solid #f0d48b;border-radius:14px;padding:14px 17px;margin:1.2rem 0}.sentinel-card{border:1px solid #e2e8f0;border-radius:18px;padding:1.2rem;background:var(--global-bg-color);box-shadow:0 10px 35px #23395d0b}.sentinel-drop{border:1.5px dashed #aebfd9;border-radius:13px;padding:2rem;text-align:center;background:#fbfcff}.sentinel-drop.drag{border-color:#356ae6;background:#eef4ff}.sentinel-drop input{display:none}.sentinel-drop label{font-weight:700;cursor:pointer}.sentinel-drop label span{color:#356ae6;text-decoration:underline}.sentinel-upload-icon{font-size:1.8rem;color:#356ae6}.sentinel-button{width:100%;border:0;border-radius:10px;background:#2459d6;color:white;padding:12px 18px;margin-top:1rem;font-weight:800;cursor:pointer}.sentinel-button:disabled{opacity:.6;cursor:wait}.sentinel-status{min-height:1.5em;color:#68758a;text-align:center;font-size:.9rem}.sentinel-hidden{display:none}.sentinel-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:1.2rem}.sentinel-metric{padding:14px;border-radius:12px;background:#f5f7fb}.sentinel-metric small{color:#718096}.sentinel-metric strong{display:block;font-size:1.35rem}.sentinel-risk-Low{color:#16804b}.sentinel-risk-Medium{color:#9b6900}.sentinel-risk-High,.sentinel-risk-Critical{color:#c23b3b}.sentinel-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}.sentinel-panel{margin-top:15px}.sentinel-panel h2{font-size:1.05rem;margin-top:0}.sentinel-scroll{max-height:220px;overflow:auto}.sentinel-hash{font:12px ui-monospace,monospace;word-break:break-all}.sentinel-download{border:0;border-radius:8px;background:#e9effb;color:#2c58a9;padding:9px 12px;font-weight:700;cursor:pointer}@media(max-width:650px){.sentinel-summary,.sentinel-grid{grid-template-columns:1fr 1fr}.sentinel-hero h1{font-size:3rem}}
</style>

<div class="sentinel-shell">
  <section class="sentinel-hero">
    <div class="sentinel-kicker">DEFENSIVE MOBILE SECURITY</div>
    <h1>Understand an APK<br><span>before it runs.</span></h1>
    <p>Upload an Android package for quick, explainable static triage. Analysis runs in your browser; the APK is never sent to a server.</p>
  </section>
  <div class="sentinel-notice"><strong>Safety boundary:</strong> Use only APK samples you own or are authorized to inspect. This tool never installs, executes, or controls a device.</div>
  <section class="sentinel-card">
    <div class="sentinel-drop" id="sentinelDrop"><div class="sentinel-upload-icon">↑</div><label for="sentinelApk">Drop an APK here or <span>browse files</span></label><input id="sentinelApk" type="file" accept=".apk"><p id="sentinelFile" class="sentinel-status">Maximum file size: 25 MB</p></div>
    <button class="sentinel-button" id="sentinelAnalyze">Analyze safely →</button><p class="sentinel-status" id="sentinelStatus" role="status"></p>
  </section>
  <section id="sentinelReport" class="sentinel-hidden" aria-live="polite"></section>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="{{ '/assets/js/apk-sentinel.js' | relative_url }}"></script>
