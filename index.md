
---
layout: default
title: "{{ site.title }}"
---
<section class="section">
  <h2>统计 / 生信 / 气象建模 · 笔记（最近）</h2>
  <div class="list">
    {% assign items = site.notes | sort: 'date' | reverse | slice: 0, 5 %}
    {% for n in items %}
    <a class="card" href="{{ n.url | relative_url }}">
      <span class="dot" aria-hidden="true"></span>
      <div>
        <h3>{{ n.title }}</h3>
        <div class="meta">{{ n.date | date: '%Y-%m-%d' }} · {{ n.tags | array_to_sentence_string }}</div>
        <div class="meta">{{ n.excerpt | strip_html | truncate: 120 }}</div>
      </div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>代表项目</h2>
  <div class="list">
    {% assign projects = site.projects | sort: 'weight' | default: site.projects | slice: 0, 6 %}
    {% for p in projects %}
    <a class="card" href="{{ p.url | relative_url }}">
      <span class="dot" aria-hidden="true"></span>
      <div>
        <h3>{{ p.title }}</h3>
        <div class="meta">{{ p.role }} · {{ p.period }}</div>
        <div class="meta">{{ p.excerpt | strip_html | truncate: 120 }}</div>
      </div>
    </a>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>最新文章</h2>
  <div class="list">
    {% for post in site.posts limit:5 %}
    <a class="card" href="{{ post.url | relative_url }}">
      <span class="dot" aria-hidden="true"></span>
      <div>
        <h3>{{ post.title }}</h3>
        <div class="meta">{{ post.date | date: '%Y-%m-%d' }} · {{ post.tags | array_to_sentence_string }}</div>
        <div class="meta">{{ post.excerpt | strip_html | truncate: 120 }}</div>
      </div>
    </a>
    {% endfor %}
  </div>
</section>
