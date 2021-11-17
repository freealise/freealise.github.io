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
      "text": "As a teenager I had made attempts to compose songs, focusing on the text and trying to make sense of it - only to end up translating. Since then I've been taking a lot of notes, although mostly about music apps and what you would now call artificial intelligence."
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
