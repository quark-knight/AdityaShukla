# Aditya Shukla: academic homepage

Plain HTML/CSS/JS. There's no build step and no tracking.

```
index.html      content (every section is commented; search for "TODO")
style.css       styles (accent colour: --accent near the top)
script.js       dark-mode toggle, mobile menu, active nav link
assets/
  cv.pdf        CV linked from the "CV" buttons. Replace it to update.
  favicon.svg
  photo.jpg     add this (square, ~600×600). An "AS" monogram shows until it exists.
.nojekyll       tells GitHub Pages to serve the files as-is
```

## Editing
- **Add a project:** in `index.html`, copy everything between `<!-- PROJECT START -->` and `<!-- PROJECT END -->` and paste it below.
- **Add a publication:** copy a `<li class="pub">` block (see `PUBLICATION START`) to the top of the list.
- **Add a position or degree:** copy an `<article class="entry">` block (see `ENTRY START`).
- **Update the CV:** overwrite `assets/cv.pdf` with the same file name.
- **Change the domain/username:** update the `canonical`, `og:url` and `og:image` URLs in the `<head>`.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.
