# robertmyhre.no - Komplett Setup Guide for Claude

## Eierinfo
- **Navn:** Robert Myhre
- **E-post:** robertmyhre@icloud.com
- **Prosjekt:** robertmyhre.no nyhetsside

---

## Mappestruktur

```
/sessions/youthful-keen-tesla/mnt/Ny nettside/
├── admin/
│   ├── index.html          (Sveltia CMS admin-panel)
│   └── config.yml          (Sveltia CMS konfigurasjon)
├── nyheter/                (Artikkelmapper)
│   ├── *.md               (Markdown-artikler: YYYY-MM-DD-slug.md)
│   └── *.jpg              (Artikkelbilder)
├── bilder/                 (Sitens bilder)
├── index.html             (Forsiden)
├── nyheter.html           (Nyhetsside)
├── artikkel.html          (Artikkelmal)
├── CNAME                  (Custom domain)
└── .git/                  (Git-repositorium)
```

---

## GitHub Repository

**Repository:** `sundaypepper/robertmyhre-nyheter`
**URL:** https://github.com/sundaypepper/robertmyhre-nyheter
**Eiernavn:** sundaypepper
**Branch:** master
**Type:** Public

### Git Workflows

**Pushe endringer til GitHub:**
```bash
cd "/Users/robertmyhre/Dropbox/Robert Myhre/Ny nettside"
git add .
git commit -m "Beskrivelse av endringene"
git push
```

**Hvis første push til ny repo:**
```bash
git push --set-upstream origin master
```

---

## Netlify / GitHub Pages Hosting

**Live URL:** robertmyhre.no
**Hosting:** GitHub Pages (automatisk build fra `master` branch)
**Build-tid:** 1-5 minutter etter push

**Sjekk build-status:**
- GitHub → Repository → Actions-tab

---

## Sveltia CMS

### Admin-panel
**URL:** https://robertmyhre.no/admin/
**Backend:** GitHub (OAuth)
**Autentisering:** GitHub login (sundaypepper konto)

### config.yml-innstillinger
- **Backend:** GitHub
- **Repo:** sundaypepper/robertmyhre-nyheter
- **Branch:** main/master
- **Media folder:** images/
- **Public folder:** /images/
- **Locale:** nb (norsk bokmål)

### Artikkelformat
- **Folder:** nyheter/
- **Filnavn:** YYYY-MM-DD-slug.md
- **Format:** YAML frontmatter + Markdown
- **Fields:**
  - title (string)
  - date (datetime: DD.MM.YYYY)
  - image (image, optional)
  - excerpt (text, optional)
  - body (markdown) - **OBS: widget må være "markdown", ikke "rich-text"**

### Eksempel frontmatter:
```yaml
---
title: "Artikkelens tittel"
date: 2026-02-20
image: filename.jpg
excerpt: "Kort oppsummering av artikkelen"
---
```

---

## Farger og Styling

### Grønn farge (titler)
Hex: `#2C5F2D`
RGB: (44, 95, 45)

**HTML-heading med grønn farge:**
```html
<h2 style="color: #2C5F2D;">Overskrift</h2>
```

---

## Innlogginger & Autentisering

### GitHub
- **Brukernavn:** sundaypepper
- **URL:** https://github.com/sundaypepper
- **Autentisering:** SSH-nøkler eller Personal Access Token

### Personal Access Token (hvis trengs)
1. GitHub.com → Settings → Developer settings → Personal access tokens
2. Generate new token (classic)
3. Scope: `repo` (full control of private repositories)
4. Bruk som passord når `git push` spørr

---

## Vanlige Oppgaver

### Legge til ny artikkel via Sveltia CMS
1. Gå til https://robertmyhre.no/admin/
2. Logg inn med GitHub
3. Klikk "Artikler" → "Ny"
4. Fyll inn: Tittel, Dato, Oppsummering, Bilde
5. Skriv innhold i "Innhold"-feltet (Markdown-format)
6. Klikk "Publiser"

**Markdown-tips:**
- `## Overskrift` = H2
- `### Undertittel` = H3
- `**fet tekst**` = bold
- `*kursiv*` = italic
- `- listepunkt` = liste

### Legge til artikkel via Terminal/Git
1. Lag fil: `nyheter/YYYY-MM-DD-slug.md`
2. Fyll inn frontmatter + innhold
3. Legg til bilde i `nyheter/`-mappen
4. Push til GitHub:
```bash
cd "/Users/robertmyhre/Dropbox/Robert Myhre/Ny nettside"
git add nyheter/
git commit -m "Legg til ny artikkel: Tittel"
git push
```

### Fikse Sveltia CMS config
**Fil:** `/admin/config.yml`

**Hvis markdown-widget gir feil:**
- Feil: `widget: "rich-text"` → ikke støttet
- Riktig: `widget: "markdown"` → bruk dette

### Cache-problemer
- **Refresh nettleseren:** Cmd+Shift+R (Mac) eller Ctrl+Shift+R (Windows)
- **Inkognito/Private mode:** Åpne nettleseren i privat modus
- **GitHub Pages build:** Kan ta 1-5 minutter

---

## Filformat-konvensjoner

### Artikler
- **Filnavn:** `2026-02-20-tittel-slug.md`
- **Innhold:** YAML frontmatter + Markdown
- **Bilder:** JPG, PNG (anbefalt < 500KB)
- **Bildenavn:** `descriptive-name.jpg` (uten spesialtegn)

### Markdown-tips
```markdown
# Ikke bruk H1 - bruk H2+

## H2 - Hovedoverskrift
### H3 - Underoverskrift

**Fet tekst**
*Kursiv*
[Lenke](https://example.com)

- Listepunkt 1
- Listepunkt 2

> Sitat eller emphasis

---
Horisontal linje (bruk sparsomt)
```

---

## Kjente Issues & Løsninger

### Problem: "#### " vises som tekst
**Løsning:** Bruk `<h2>` HTML-tag istedenfor `##` markdown
```html
<h2 style="color: #2C5F2D;">Tittel</h2>
```

### Problem: Markdown-widget gir "unsupported field type"
**Løsning:** Endre i `config.yml`:
```yaml
- { label: "Innhold", name: "body", widget: "markdown" }
```

### Problem: Git sier "no upstream branch"
**Løsning:** Push med upstream-flag:
```bash
git push --set-upstream origin master
```

### Problem: Nettsiden oppdateres ikke etter push
**Løsning:**
1. Vent 2-5 minutter (GitHub Pages bygger)
2. Refresh nettleseren (Cmd+Shift+R)
3. Sjekk GitHub Actions for build-status

---

## Kontaktinformasjon & Resources

**GitHub:** https://github.com/sundaypepper/robertmyhre-nyheter
**Sveltia CMS Docs:** https://sveltiacms.app/en/docs/
**GitHub Pages Docs:** https://pages.github.com/

---

## Notater for fremtiden

- Sveltia CMS konfigurasjonen er testet og fungerer med `widget: "markdown"`
- Grønn farge (#2C5F2D) brukes på hovedoverskrifter
- Bildefilen `oli-woodman-f4jsI88K7ds-unsplash.jpg` er fra Unsplash (CC0)
- Repository er public, alle endringer er synlige på GitHub

---

**Sist oppdatert:** 20. februar 2026
**Versjon:** 1.0
