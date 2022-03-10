---
---

var json = {
  "title": {
    "background": {
      "url": ""
    },
    "text": {
      "headline": "Journal",
      "text": "Current updates sent in the newsletter."
    }
  },
  "events": [
      {% for post in site.posts %}
      {
        "media": {
          "url": "{{ post.link }}",
          "caption": "{{ post.caption }}",
          "credit": "{{ post.credit }}"
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
