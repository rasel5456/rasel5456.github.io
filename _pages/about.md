---
layout: about
title: about
permalink: /
subtitle: CSE Student at Independent University, Bangladesh

profile:
  align: right
  image:
  image_circular: true
  more_info: >
    <p>Machine Learning & Cybersecurity Enthusiast</p>
    <p>Independent University, Bangladesh</p>

selected_papers: false
social: true
announcements:
  enabled: false
latest_posts:
  enabled: false
---

## Hello, I’m MD. Rasel Hossen Sawpon.

I am a Computer Science and Engineering student at **Independent University, Bangladesh (IUB)**. My primary interests are **Machine Learning**, **Cybersecurity**, software development, and future research.

I am currently building academic and personal projects to strengthen my programming, problem-solving, and software engineering skills. I plan to keep learning, complete more projects, and gradually begin research in areas that connect intelligent systems with secure technology.

## Research interests

- Machine Learning and Artificial Intelligence
- Cybersecurity and Information Security
- Secure Software Development
- Applied Machine Learning
- Future research in intelligent and secure systems

## Latest projects

{% assign latest_projects = site.projects | sort: "date" | reverse %}
{% for project in latest_projects limit: 3 %}
  {% include projects.liquid %}
{% endfor %}

[See More Projects]({{ '/projects/' | relative_url }})

## Social links

Connect with me on [GitHub](https://github.com/rasel5456), [LinkedIn](https://linkedin.com/in/md-rasel-hossen-sawpon-8a70aa210), and [Facebook](https://www.facebook.com/share/17WBAQchmQ/).
