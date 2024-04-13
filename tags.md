---
layout: page
---

# All Tags

{% assign all_tags = site.tags | sort %}

<ul>
{% for tag in all_tags %}
  <li><a href="/t/{{ tag[0] | slugify }}/">{{ tag[0] }}</a></li>
{% endfor %}
</ul>
