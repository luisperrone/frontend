## Shiphero Flags Manual (Static Frontend)

A small static site (HTML/CSS/JS) that provides an internal “flags manual” style page, gated by a simple client-side login.

## Run locally

Open index.html in your browser.

## Login (client-side)

Credentials are hardcoded in js/index.js:

Email: admin@admin.com

Password: admin123

On success, it redirects to Pages/Welcome.html.

## Project structure

index.html and js/index.js: login screen + validation + redirect

Pages/Welcome.html: the manual content (sections, anchors, flag definitions, embedded video)

css/index.css, css/Welcome.css: styling

Media/: logo asset

Editing content

Add/edit manual sections and flag entries in Pages/Welcome.html.

The “Collaborate” form posts to Formspree; update the action URL if you want submissions to go somewhere else.
