# Quick customization guide

## Change group tagline or homepage text
Open `index.html`.

Search for:
- `The Illinois College Computational Photonics Zone`
- `We use numerical physics`
- `Current research directions`

## Change research descriptions
Open `research.html`.

Each research block is marked with an ID:
- `id="diamond"`
- `id="temporal"`
- `id="fdtd"`
- `id="hybrid-mode-locking"`
- `id="qdsoa-crypto"`

## Change people
Open `people.html`.

Each person is a `<div class="card person"> ... </div>` block.

To use a real headshot, replace:

```html
<div class="avatar">AR</div>
```

with:

```html
<img class="avatar" src="assets/img/ashiq-rahman.jpg" alt="Ashiq Rahman">
```

Then copy the image into `assets/img/`.

## Change publications
Open `publications.html`.

A publication looks like:

```html
<div class="pub">
  <div class="pub-year">2024</div>
  <div>...</div>
</div>
```

Copy a block to add another item.

## Change colors
Open `assets/css/styles.css`.

At the very top are variables such as:

```css
--navy:#071a39;
--blue:#0b58d0;
--electric:#22b8ff;
--violet:#7a5cff;
```

Change those values to recolor the whole site.

## Replace the logo
Replace `assets/img/logo.svg` with your new logo while keeping the same filename.

## Add GitHub / Google Scholar / ORCID links
Add them wherever you want in `people.html` or `contact.html` after you have the verified URLs.

## Publish updates

```bash
git add .
git commit -m "Update ComPhotZone website"
git push
```

GitHub Pages normally reflects the update within a few minutes.
