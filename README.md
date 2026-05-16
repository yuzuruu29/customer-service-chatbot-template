# PinoyBot AI — Project Overview

AI chatbot solution for Filipino small businesses. This project contains two separate parts: a marketing website and a Botpress chatbot scaffold, kept in isolated folders so each can be worked on independently.

---

## Project Structure

```
ChatBot AI/
├── README.md
├── website/                        # Static marketing website (PinoyBot landing page)
│   ├── index.html
│   ├── style.css
│   ├── main.js
│   └── hero.png
├── botpress/                       # Botpress chatbot scaffold
│   ├── botpress.config.json        # Global Botpress server config
│   └── bots/
│       └── restaurant-faq-bot/
│           ├── bot.config.json
│           ├── flows/
│           │   └── main.flow.json
│           ├── nlu/
│           │   ├── intents/        # 10 trained intents
│           │   └── entities/       # Custom entities (menu_type, dietary_requirement)
│           ├── content-elements/
│           │   └── responses.json  # All bot reply messages
│           └── hooks/
│               ├── before_incoming_middleware/
│               └── after_incoming_middleware/
└── docs/
    ├── setup-guide.md
    ├── testing-checklist.md
    └── chatbot-faq-template.md
```

---

## 1. Previewing the Website

The website is a plain HTML/CSS/JS site — no build step required.

**Quickest option — open directly in a browser:**
```
website/index.html  →  right-click → Open With → your browser
```

**Recommended — use a local dev server so relative paths and JS work correctly:**

```bash
# Option A: VS Code Live Server extension
# Install "Live Server" by Ritwick Dey, then right-click website/index.html → "Open with Live Server"

# Option B: Node http-server
npx http-server website -p 5500
# then open http://localhost:5500

# Option C: Python
cd website
python -m http.server 5500
# then open http://localhost:5500
```

The demo chat widget in the `#demo` section is a local mock (no Botpress connection needed to preview it). The real Botpress webchat appears only after you paste the embed code (see Section 3).

---

## 2. Using the Botpress Bot Files

The `botpress/` folder is a self-contained Botpress v12 project that you import into a running Botpress server.

### Prerequisites
- Node.js v18+
- Botpress Server v12 — [download here](https://botpress.com/download)

### Steps

```bash
# 1. Install Botpress globally
npm install -g botpress

# 2. Start the server, pointing it at the botpress/ folder as the project root
cd "C:\ChatBot AI\botpress"
botpress serve

# 3. Open Botpress Studio in your browser
#    http://localhost:3000

# 4. Import the bot
#    Studio → Bots → Import Bot → select the folder:
#    C:\ChatBot AI\botpress\bots\restaurant-faq-bot
```

### Training the NLU

After importing, go to **NLU** in the Studio sidebar and click **Train**. Each of the 10 intents has 10 English utterances ready to go. Training takes about 30 seconds on a local machine.

### The 10 Intents

| # | Intent | What it handles |
|---|--------|-----------------|
| 1 | `get_opening_hours` | Hours, weekend/holiday hours |
| 2 | `make_reservation` | Table bookings (slots: party size, date/time) |
| 3 | `get_menu` | Menu overview (slot: menu type) |
| 4 | `get_location` | Address, directions, parking |
| 5 | `get_contact_info` | Phone, email, social media |
| 6 | `dietary_options` | Vegan, gluten-free, halal, nut-free, etc. |
| 7 | `get_pricing` | Price ranges, set menus |
| 8 | `cancel_reservation` | Cancellation process and policy |
| 9 | `order_takeaway` | Click & collect / takeaway |
| 10 | `get_delivery_info` | Delivery apps, fees, radius, ETA |

---

## 3. Pasting the Botpress Webchat Embed Code

Once your bot is live in Botpress Cloud or a hosted server, grab the embed snippet from:
**Studio → Integrations → Webchat → Embed Code**

Open `website/index.html` and find this block (around line 104):

```html
<!-- REPLACE THIS WITH YOUR BOTPRESS EMBED CODE -->
<div id="botpress-placeholder">
    <!-- BOTPRESS EMBED CODE GOES HERE -->
    <script src="https://cdn.botpress.cloud/webchat/v2/shareable.js"></script>
</div>
```

Replace the entire `<div id="botpress-placeholder">...</div>` block with the two `<script>` tags Botpress gives you. They look like this:

```html
<script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/YOUR_BOT_ID/webchat/v2/config.js"></script>
```

The webchat bubble will appear in the bottom-right corner of the website automatically after this. You do not need to change anything else in `index.html`.

---

## 4. What Still Needs to Be Done Inside Botpress

These steps cannot be done from files — they require the Botpress Studio UI:

| # | Task | Where in Studio |
|---|------|-----------------|
| 1 | **Train the NLU model** | NLU → Train |
| 2 | **Test each intent** | NLU → Try it out |
| 3 | **Activate the Webchat channel** | Integrations → Webchat → Enable |
| 4 | **Copy the embed code** | Integrations → Webchat → Embed Code |
| 5 | **Add Messenger / WhatsApp channels** (optional) | Integrations → Facebook / WhatsApp |
| 6 | **Set up a human handoff node** (optional) | Flows → add a "Talk to Human" node |
| 7 | **Connect a CRM or Google Sheets** (optional) | Integrations → HTTP Request action in flows |
| 8 | **Publish the bot** | Studio top bar → Publish |

> **Note:** The bot files in `botpress/` define the structure and responses. Botpress Studio is the only place to publish, test live, and connect external channels.

---

## Customisation Quick Reference

| What to change | File to edit |
|----------------|--------------|
| Business name, nav links, pricing | `website/index.html` |
| Colors, fonts, layout | `website/style.css` |
| Mock demo chat responses | `website/main.js` → `responses` object |
| Bot reply text | `botpress/bots/restaurant-faq-bot/content-elements/responses.json` |
| Add training phrases to an intent | `botpress/bots/restaurant-faq-bot/nlu/intents/<intent>.json` |
| Add a new intent | New file in `nlu/intents/` + new node in `flows/main.flow.json` + new entry in `responses.json` |

---

## Docs

- [Setup Guide](docs/setup-guide.md) — step-by-step Botpress setup and embed instructions
- [Testing Checklist](docs/testing-checklist.md) — QA checklist before going live
- [Chatbot FAQ Template](docs/chatbot-faq-template.md) — reusable FAQ content template
