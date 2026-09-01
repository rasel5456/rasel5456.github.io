---
layout: page
title: projects
permalink: /projects/
description: A collection of my software development projects.
nav: true
nav_order: 3
display_categories: [work]
horizontal: false
---

{% assign sorted_projects = site.projects | sort: "importance" %}
{% for project in sorted_projects %}
  {% include projects.liquid %}
{% endfor %}
