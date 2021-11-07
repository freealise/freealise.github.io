---
---

var json = {
  "title": {
    "media": {
      "url": "",
      "caption": "",
      "credit": ""
    },
    "text": {
      "headline": "Latest updates",
      "text": "<p>timeline</p>"
    }
  },
  "events": [
      {% for post in site.posts %}
      {
        "media": {
          "url": "{{ post.url }}",
          "caption": "{{ post.title }}",
          "credit": "{{ post.author }}"
        },
        "start_date": {
          "month": "{{ post.date | date: "%-m" }}",
          "day": "{{ post.date | date: "%-d" }}",
          "year": "{{ post.date | date: "%Y" }}"
        },
        "text": {
          "headline": "{{ post.title }}",
          "text": {{ post.content | jsonify }}
        }
      },
      {% endfor %}
  ]
};
