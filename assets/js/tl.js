---
---
  
/*
1992: english; S
1994: music school; II / D
1997: beads and web; BT

2002: red notebook; BGCI
2006: translations; AIL
2011: gift economy; DNOS

2015: guitar; BST
2017: tuning; FG
2018: synth; MP

2019: prototype; BTH
2020: phonetics; F
2021: site FI
*/

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
