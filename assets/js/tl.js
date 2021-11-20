---
---

var json = {
  "title": {
    "media": {
      "url": "/assets/images/portrait150dpi.png",
      "caption": "Portrait of a Young Lady",
      "credit": "G.-C.-J.Zapf, 1843"
    },
    "text": {
      "headline": "Story",
      "text": "… of the business including the historical events that influenced or led to its foundation."
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
