<h2 id="publications" style="margin: 2px 0px -15px; display: flex; align-items: baseline;">
  Selected Publications
  {% if site.google_scholar %}
    <small style="font-size: 0.8rem; font-weight: 400; margin-left: 1em;">
      <a href="{{ site.google_scholar }}" target="_blank" rel="noopener">(Click for full list)</a>
    </small>
  {% endif %}
</h2>

<div class="publications">
{% if site.data.publications.main and site.data.publications.main.size > 0 %}
{% if site.data.publications.main.size > 1 %}
<div id="filters" class="filters">
  <button class="btn active" data-filter="*">All</button>
  <button class="btn" data-filter="Computer Vision">Computer Vision</button>
  <button class="btn" data-filter="Object Detection">Object Detection</button>
  <button class="btn" data-filter="Embodied AI">Embodied AI</button>
  <button class="btn" data-filter="Multimodal Learning">Multimodal Learning</button>
  <button class="btn" data-filter="World Model">World Model</button>
  <button class="btn" data-filter="Reinforcement Learning">Reinforcement Learning</button>
  <button class="btn" data-filter="NLP">NLP</button>
  </div>
{% endif %}
<ol class="bibliography">

{% for link in site.data.publications.main %}

<li data-tags="{{ link.tags | join: ', ' }}">
<div class="pub-row">
  {% if link.image %}
  <div class="pub-media abbr">
  <a href="{% if link.page %}{{ link.page }}{% else %}{{ link.pdf }}{% endif %}" target="_blank" rel="noopener noreferrer">
    <img src="{{ link.image }}" class="teaser img-fluid z-depth-1" alt="{{ link.title }} teaser">
  </a>
  {% if link.conference_short %}
  <abbr class="badge">{{ link.conference_short }}</abbr>
  {% endif %}
  </div>
  {% endif %}
  <div class="pub-content">
      <div class="title">
        {% if link.pdf %}
        <a href="{{ link.pdf }}">{{ link.title }}</a>
        {% elsif link.url %}
        <a href="{{ link.url }}">{{ link.title }}</a>
        {% elsif link.page %}
        <a href="{{ link.page }}">{{ link.title }}</a>
        {% else %}
        {{ link.title }}
        {% endif %}
      </div>
      <div class="author">
        {% assign first_author = link.authors | first %}
        {% if first_author.name %}
          {% for author in link.authors %}
            {% if author.highlight %}<strong>{{ author.name }}</strong>{% else %}{{ author.name }}{% endif %}{% if author.equal %}<sup>*</sup>{% endif %}{% unless forloop.last %}, {% endunless %}
          {% endfor %}
        {% else %}
          {{ link.authors }}
        {% endif %}
        {% if link.equal_note %}
        <span class="equal-note">{{ link.equal_note }}</span>
        {% endif %}
      </div>
      <div class="periodical"><em>{{ link.conference }}</em>
      </div>
    <div class="links">
        {% if link.pdf %}
        <a href="{{ link.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;"><i class="fas fa-file-pdf"></i> PDF</a>
        {% endif %}
        {% if link.url %}
        <a href="{{ link.url }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;"><i class="ai ai-arxiv"></i> arXiv</a>
        {% endif %}
        {% if link.code %}
        <a href="{{ link.code }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;"><i class="fab fa-github"></i> Code</a>
        {% endif %}
        {% if link.page %}
        <a href="{{ link.page }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;"><i class="fas fa-globe"></i> Project Page</a>
        {% endif %}
        {% if link.bibtex %}
        <a href="{{ link.bibtex }}" class="btn btn-sm z-depth-0" role="button" target="_blank" style="font-size:12px;"><i class="fas fa-quote-right"></i> BibTex</a>
        {% endif %}
      {% if link.notes %}
      <strong> <i style="color:#e74d3c">{{ link.notes }}</i></strong>
      {% endif %}
      {% if link.others %}
      {{ link.others }}
      {% endif %}
    </div>
  </div>
</div>
</li>
<br>

{% endfor %}

</ol>
{% else %}
<p>Selected publications will be added here as projects mature.</p>
{% endif %}
</div>
