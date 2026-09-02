---
layout: about
title: about
permalink: /

description: MD. Rasel Hossen Sawpon is a Computer Science and Engineering student at Independent University, Bangladesh, focused on Machine Learning, Cybersecurity, software development, and future research.
profile:
  align: right
  image: profile-photo.webp
  image_circular: true
  more_info: >
    <p>Machine Learning & Cybersecurity Enthusiast</p>
    <p>Independent University, Bangladesh</p>
    <div class="profile-social-links" style="display:flex; gap:1rem; align-items:center; font-size:1.6rem; margin-top:0.75rem;">
      <a href="https://www.facebook.com/share/17WBAQchmQ/" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener"><i class="fa-brands fa-facebook"></i></a>
      <a href="mailto:albertrassel@gmail.com" aria-label="Email" title="Email"><i class="fa-solid fa-envelope"></i></a>
      <a href="https://github.com/rasel5456" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i></a>
      <a href="https://linkedin.com/in/md-rasel-hossen-sawpon-8a70aa210" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i></a>
    </div>

selected_papers: false
social: false
announcements:
  enabled: false
latest_posts:
  enabled: false
---

<section class="portfolio-hero">
  <p class="hero-kicker">BUILDING INTELLIGENT &amp; SECURE TECHNOLOGY</p>
  <h2>Exploring Machine Learning and Cybersecurity</h2>
  <p class="hero-summary">Computer Science and Engineering student at IUB, building practical projects and preparing for future research.</p>
  <div class="hero-actions">
    <a class="hero-button hero-button-primary" href="{{ '/projects/' | relative_url }}">Explore Projects <i class="fa-solid fa-arrow-right"></i></a>
    <a class="hero-button hero-button-secondary" href="mailto:albertrassel@gmail.com">Contact Me <i class="fa-solid fa-envelope"></i></a>
  </div>
</section>

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

## Latest blog posts

{% if site.posts.size > 0 %}
{% assign latest_posts = site.posts | sort: "date" | reverse %}
{% for post in latest_posts limit: 3 %}
- [{{ post.title }}]({{ post.url | relative_url }}){% if post.description %} — {{ post.description }}{% endif %}
{% endfor %}

[See More Blog Posts]({{ '/blog/' | relative_url }})
{% else %}
Blog posts will be added here soon. [Visit Blog]({{ '/blog/' | relative_url }})
{% endif %}

## Latest books

{% if site.books.size > 0 %}
{% assign latest_books = site.books | sort: "date" | reverse %}
{% for book in latest_books limit: 3 %}
- [{{ book.title }}]({{ book.url | relative_url }}){% if book.author %} — {{ book.author }}{% endif %}
{% endfor %}

[See More Books]({{ '/books/' | relative_url }})
{% else %}
Books will be added here soon. [Visit Books]({{ '/books/' | relative_url }})
{% endif %}

## Latest news

{% if site.news.size > 0 %}
{% assign latest_news = site.news | sort: "date" | reverse %}
{% for item in latest_news limit: 3 %}
- [{{ item.title }}]({{ item.url | relative_url }}){% if item.description %} — {{ item.description }}{% endif %}
{% endfor %}

[See More News]({{ '/news/' | relative_url }})
{% else %}
News updates will be added here soon. [Visit News]({{ '/news/' | relative_url }})
{% endif %}

## Latest teaching resources

{% if site.teachings.size > 0 %}
{% assign latest_teaching = site.teachings | sort: "date" | reverse %}
{% for item in latest_teaching limit: 3 %}
- [{{ item.title }}]({{ item.url | relative_url }}){% if item.description %} — {{ item.description }}{% endif %}
{% endfor %}

[See More Teaching]({{ '/teaching/' | relative_url }})
{% else %}
Teaching materials will be added here soon. [Visit Teaching]({{ '/teaching/' | relative_url }})
{% endif %}

## Latest publications

{% if site.publications.size > 0 %}
{% assign latest_publications = site.publications | sort: "date" | reverse %}
{% for item in latest_publications limit: 3 %}
- [{{ item.title }}]({{ item.url | relative_url }}){% if item.description %} — {{ item.description }}{% endif %}
{% endfor %}

[See More Publications]({{ '/publications/' | relative_url }})
{% else %}
Research publications will be added here when available. [Visit Publications]({{ '/publications/' | relative_url }})
{% endif %}

## Education

I am currently studying Computer Science and Engineering at **Independent University, Bangladesh (IUB)**.

[See More Education]({{ '/education/' | relative_url }})

## Experience

Academic, project, internship, research, and professional experience will be added here as they grow.

[See More Experience]({{ '/experience/' | relative_url }})

## Achievements

Awards, certifications, competitions, and important milestones will be added here over time.

[See More Achievements]({{ '/achievements/' | relative_url }})
