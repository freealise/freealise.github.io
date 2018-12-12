var json = {
  "title": {
    "media": {
        "url": "",
        "caption": "",
        "credit": ""
    },
    "text": {
        "headline": "Freealise",
        "text": "Blog"
    }
  },
  "events": [
  {% for post in site.posts %}
    {
      "media": {
        "url": "{{ post.media }}",
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
        "text": "{{ post.excerpt | replace: '"', "'" }}"
      }
    }
    {% unless forloop.last %},{% endunless %}
  {% endfor %}
  ]
};
