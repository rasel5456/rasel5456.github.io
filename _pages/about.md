---
layout: about
title: about
permalink: /
subtitle: CSE Student at Independent University, Bangladesh

description: MD. Rasel Hossen Sawpon is a Computer Science and Engineering student at Independent University, Bangladesh, focused on Machine Learning, Cybersecurity, software development, and future research.
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

Connect with me:

<div class="social-links" style="display:flex; gap:1rem; align-items:center; font-size:1.8rem;">
  <a href="https://github.com/rasel5456" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a>
  <a href="https://linkedin.com/in/md-rasel-hossen-sawpon-8a70aa210" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
  <a href="https://www.facebook.com/share/17WBAQchmQ/" aria-label="Facebook" title="Facebook"><i class="fa-brands fa-facebook"></i></a>
</div>
