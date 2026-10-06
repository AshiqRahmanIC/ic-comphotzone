# ComPhotZone website

Static research-group website for the **Illinois College Computational Photonics Zone (ComPhotZone)**.

## Run locally

From this folder:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

VS Code users can also use the Live Server extension.

## Main files

- `index.html` — homepage
- `research.html` — research topics and projects
- `people.html` — team and collaborators
- `publications.html` — publications, manuscripts, presentations
- `opportunities.html` — undergraduate research opportunities
- `contact.html` — group contact page
- `assets/css/styles.css` — colors, typography, layout
- `assets/js/main.js` — mobile navigation and homepage spectrum animation
- `assets/img/` — logo and research illustrations

See `CUSTOMIZE.md` for the fastest way to edit names, descriptions, links, and photos.

## GitHub Pages

Create a public repository, for example:

`comphotzone`

Push the contents of this folder to the repository. In GitHub:

**Settings → Pages → Build and deployment → Deploy from a branch → main → /(root)**

If your GitHub username is `USERNAME`, a project repository can appear at:

`https://USERNAME.github.io/comphotzone/`

You can also use a custom domain later.

## Content scope

This version intentionally focuses only on research themes documented in the Ashiq project that belong to ComPhotZone:

- nonlinear and integrated photonics
- supercontinuum generation
- diamond waveguides and dispersive-wave engineering
- chalcogenide nonlinear optics
- ultrafast pulse propagation
- temporal mirrors and time-lens simulations
- hybrid mode-locked ultrashort pulse generation
- all-optical cryptography using quantum-dot semiconductor optical amplifiers (QD-SOAs)
- computational electromagnetics / FDTD
- open computational photonics workflows

Unrelated structural, thermal, mechanical, composite, welding, thermoelectric, and materials projects are intentionally excluded.
