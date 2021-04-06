---
layout: default.njk
title: Drasnerd
---

<style>
  .glossary-container {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }

  .glossary-term {
    background: #eee;
    border-radius: 1rem;
    margin: 0;
    padding: 1rem;
    width: calc(33% - 1rem);
  }
</style>

<h1 class="title">{{ glossary.title }}</h1>

<div class="glossary-container">
{% for term in glossary.terms %}

<article class="glossary-term">
 <div class="content">
  <h2 class="title">{{ term.term }}</h2>
  <div class="content">
    <p>{{term.definition}}</p>
  </div>
 </div>
</article>

{% endfor %}
</div>
