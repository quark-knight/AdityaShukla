# Aditya Shukla: academic homepage

Plain HTML/CSS/JS. There's no build step and no tracking.

```
index.html      content (every section is commented; search for "TODO")
style.css       styles (accent colour: --accent near the top)
script.js       dark-mode toggle, mobile menu, active nav link
assets/
  cv.pdf        CV linked from the "CV" buttons. Replace it to update.
  favicon.svg
  photo.jpg     your portrait at 190px, plus photo@2x.jpg (380px) and
                photo@3x.jpg (570px). The browser picks whichever matches the
                screen. Don't point the page at a huge original: letting the
                browser shrink a 2000px photo to 190px causes bright speckling.
                To swap the photo, crop it square and export all three sizes.
                An "AS" monogram shows if the files are missing.
  fonts/        Lora, Inter and Crimson, subsetted and self-hosted (~22 KB each,
                SIL Open Font License). Nothing is loaded from Google or any CDN.
.nojekyll       tells GitHub Pages to serve the files as-is
```

## Editing
- **Add a project:** in `index.html`, copy everything between `<!-- PROJECT START -->` and `<!-- PROJECT END -->` and paste it below.
- **Add a publication:** copy a `<li class="pub">` block (see `PUBLICATION START`) to the top of the list.
- **Add a position or degree:** copy an `<article class="entry">` block (see `ENTRY START`).
- **Update the CV:** overwrite `assets/cv.pdf` with the same file name.
- **Change the fonts:** edit `--serif` and `--sans` near the top of `style.css`. Three families are already bundled; the comment there shows two alternative combinations.
- **Change the domain/username:** update the `canonical`, `og:url` and `og:image` URLs in the `<head>`.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and go to http://localhost:8000.
