# PinoyBot AI - Customer Service Chatbot Template

Static customer-service chatbot website template for Filipino small businesses, with a Botpress v12 restaurant FAQ scaffold. The project is intentionally simple: plain HTML, CSS, JavaScript, and importable Botpress files.

## Project Structure

```text
ChatBot AI/
├── README.md
├── website/
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   └── hero.png
├── botpress/
│   ├── botpress.config.json
│   └── bots/
│       └── restaurant-faq-bot/
│           ├── bot.config.json
│           ├── flows/main.flow.json
│           ├── nlu/intents/
│           ├── nlu/entities/
│           ├── content-elements/responses.json
│           └── hooks/
└── docs/
    ├── setup-guide.md
    ├── testing-checklist.md
    └── chatbot-faq-template.md
```

## Preview the Website

No build step is required.

```bash
# Option A: open directly
website/index.html

# Option B: serve the website folder locally
cd website
python -m http.server 5500
# then open http://localhost:5500

# Option C: Node
npx http-server website -p 5500
# then open http://localhost:5500
```

The chat widget in the `#demo` section is a browser-only mock. It does not connect to Botpress until you paste a real Botpress Webchat embed code into `website/index.html`.

## What to Customize First

| Change | File |
| --- | --- |
| Business name, section copy, sample prices | `website/index.html` |
| Colors, spacing, mobile layout | `website/style.css` |
| Demo chat responses | `website/main.js` |
| Botpress reply text | `botpress/bots/restaurant-faq-bot/content-elements/responses.json` |
| Botpress training phrases | `botpress/bots/restaurant-faq-bot/nlu/intents/*.json` |
| Botpress flow routing | `botpress/bots/restaurant-faq-bot/flows/main.flow.json` |

## Botpress Setup

The `botpress/` folder contains a Botpress v12 scaffold with:

- 10 restaurant FAQ intents
- 2 custom entities
- A simple intent router flow
- Editable response content
- Lightweight hooks

Basic setup:

```bash
cd botpress
botpress serve
```

Then open Botpress Studio at `http://localhost:3000`, import `botpress/bots/restaurant-faq-bot`, train the NLU model, test the intents, and enable Webchat.

## Add the Botpress Webchat Embed

In Botpress Studio, go to **Integrations > Webchat > Embed Code**.

Open `website/index.html` and find:

```html
<!-- REPLACE THIS WITH YOUR BOTPRESS EMBED CODE -->
<div id="botpress-placeholder">
    <strong>Botpress embed placeholder</strong><br>
    Paste the two script tags from Botpress Studio here before launch.
</div>
```

Replace the placeholder block with the two script tags Botpress gives you.

## Important Demo Limitations

- The contact form is a front-end preview only. It does not send email, save leads, or connect to a CRM.
- Pricing is sample copy only. Replace it with the client's actual prices before launch.
- There is no payment processing in this template.
- The Botpress bot needs manual training and Webchat publishing in Botpress Studio.
- Social media links are intentionally not included until the client provides real URLs.

## Documentation

- `docs/setup-guide.md` - beginner setup and customization steps
- `docs/testing-checklist.md` - launch QA checklist
- `docs/chatbot-faq-template.md` - starter FAQ prompts for common SMB niches

## Security Notes

- No API keys, Botpress tokens, payment keys, or passwords are committed.
- Add secrets only through your hosting platform or Botpress configuration, not directly in this repository.
- If you connect a real form endpoint, validate submissions server-side and protect it from spam.
