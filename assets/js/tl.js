---
---

var json = {
  "title": {
    "background": {
      "url": "/assets/images/constable.png"
    },
    "text": {
      "headline": "Story",
      "text": "Origin timeline of this enterprise, including the historical events that influenced or led to its foundation."
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
