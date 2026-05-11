<h2 id="experience">Experience</h2>

<div class="experience">
  <ol class="experience-list">
    {% for item in site.data.experience.main %}
    <li class="experience-item">
      <div class="experience-logo{% unless item.image %} experience-logo-empty{% endunless %}">
      {% if item.image %}
        <img
          src="{{ item.image }}"
          alt="{{ item.title }}"
          class="logo-img"
          style="{% if item.image_width %}--logo-width: {{ item.image_width }};{% endif %}{% if item.image_height %} --logo-height: {{ item.image_height }};{% endif %}"
        >
      {% endif %}
      </div>
      <div class="experience-details">
        <div class="title">
          {% if item.url %}
          <a href="{{ item.url }}" target="_blank" rel="noopener">{{ item.title }}</a>
          {% else %}
          {{ item.title }}
          {% endif %}
        </div>
        <ul>
          <li>{{ item.details }}</li>
        </ul>
      </div>
    </li>
    {% endfor %}
  </ol>
</div>
