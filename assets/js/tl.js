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
      "headline": "Songs",
      "text": "<p>in intuitive musical and voice notation, which is more like MIDI sequencing than the usual score sheets, and doesn't require special literacy. It's actually simplified audio spectrograms.</p>"
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
