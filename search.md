
---
layout: default
title: 搜索
permalink: /search/
---
<section class="section">
  <h2>站内搜索</h2>
  <input id="q" placeholder="输入关键词..." style="width:100%;padding:10px;border-radius:8px;border:1px solid var(--border);background:transparent;color:var(--text)">
  <div id="results" class="list" style="margin-top:12px"></div>
</section>

<script src="https://cdn.jsdelivr.net/npm/lunr/lunr.min.js"></script>
<script>
(async function(){
  const res = await fetch('{{ '/search.json' | relative_url }}');
  const data = await res.json();
  const idx = lunr(function () {
    this.ref('url');
    this.field('title'); this.field('content'); this.field('tags');
    data.forEach(d => this.add(d), this);
  });
  const $q = document.getElementById('q');
  const $out = document.getElementById('results');
  const render = (hits) => {
    $out.innerHTML = hits.map(h => {
      const doc = data.find(d => d.url === h.ref) || {};
      return `<a class="card" href="${doc.url}"><span class="dot"></span><div><h3>${doc.title||''}</h3><div class="meta">${doc.date||''} · ${(doc.tags||[]).join(', ')}</div><div class="meta">${(doc.content||'').slice(0,150)}...</div></div></a>`;
    }).join('');
  };
  $q.addEventListener('input', () => {
    const q = $q.value.trim();
    if(!q){ $out.innerHTML=''; return; }
    render(idx.search(q));
  });
})();
</script>
