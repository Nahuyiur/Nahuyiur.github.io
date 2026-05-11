# Yuhan Rui's Homepage

This repository contains the source code for my personal academic homepage:

[https://nahuyiur.github.io/](https://nahuyiur.github.io/)

The site is built with Jekyll and customized for my profile, research interests, experience, and personal notes.

## Local Preview

```bash
cd ~/Desktop/yuhan-main-page
export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"
bundle exec jekyll serve --host 127.0.0.1 --port 4000 --livereload
```

Then open:

[http://127.0.0.1:4000](http://127.0.0.1:4000)

## Main Files

- `_config.yml`: site identity, SEO, links, avatar, and theme settings
- `index.md`: homepage content
- `_data/experience.yml`: education, research, and internship experience
- `_data/news.yml`: homepage news
- `_data/publications.yml`: selected publications
- `_sass/minimal-light.scss`: visual theme customization
- `assets/img/`: profile photo, lab logos, and UI icons

## Theme

The default visual theme is `calm-spectrum`. A `minimal-light` fallback remains available through `_config.yml`:

```yml
visual_theme: "calm-spectrum"
```
