---
---

window.store = {
  {% for post in site.posts %}
  "{{ post.url | slugify }}": {
    "title": "{{ post.title | strip_html | escape }}",
    "url": "{{ site.baseurl }}{{ post.url }}",
    "date": "{{ post.date | date: "%B %-d, %Y" }}",
    "image": "/upload/{{ post.image }}",
    "content": {{ post.content | strip_html | jsonify }},
  },
  {% endfor %}
};
