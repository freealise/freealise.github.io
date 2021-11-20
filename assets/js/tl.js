---
---

var json = {
  "title": {
    "background": {
      "url": "/assets/images/constable.png"
    },
    "text": {
      "headline": "Story",
      "text": "The origin timeline of this enterprise, along with historical events that had been an influence or led to its foundation."
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
