# Setup Guide

This template has two parts:

- `website/` - the static marketing website
- `botpress/` - the Botpress v12 restaurant FAQ scaffold

You can edit and preview the website without running Botpress.

## 1. Preview the Website

```bash
cd website
python -m http.server 5500
```

Open `http://localhost:5500`.

You can also open `website/index.html` directly in a browser for a quick preview.

## 2. Customize the Website

Edit these files first:

- `website/index.html` - business name, page sections, sample prices, FAQ, contact copy
- `website/style.css` - colors, typography, spacing, and responsive layout
- `website/main.js` - local demo chat responses and demo form behavior
- `website/hero.png` - hero image

The contact form is demo-only. It does not send email until you connect a real form service or backend endpoint.

## 3. Run the Botpress Scaffold

Prerequisites:

- Node.js
- Botpress v12

From the project root:

```bash
cd botpress
botpress serve
```

Open `http://localhost:3000`, then import:

```text
botpress/bots/restaurant-faq-bot
```

## 4. Train and Test Botpress

In Botpress Studio:

1. Open the imported bot.
2. Go to NLU.
3. Train the model.
4. Test each intent with restaurant customer questions.
5. Update the response text in `content-elements/responses.json` or through Studio.

## 5. Add Botpress Webchat to the Website

In Botpress Studio, go to **Integrations > Webchat > Embed Code**.

In `website/index.html`, replace this placeholder:

```html
<!-- REPLACE THIS WITH YOUR BOTPRESS EMBED CODE -->
<div id="botpress-placeholder">
    <strong>Botpress embed placeholder</strong><br>
    Paste the two script tags from Botpress Studio here before launch.
</div>
```

Use the exact two script tags from Botpress. Do not commit private tokens or unrelated API keys.

## 6. Before Client Launch

- Replace sample pricing with approved prices.
- Replace demo chat responses with client-specific answers.
- Add the client's real address, phone, email, and social links.
- Connect the contact form to a real endpoint.
- Train and publish the Botpress bot.
- Test on desktop and mobile.
