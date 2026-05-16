# Setup Guide: Filipino SMB Chatbot

Welcome to your new customer service automation project! This guide will help you set up and customize your chatbot for your business.

## 1. Setting up Botpress
This demo is designed to work seamlessly with Botpress.
1. Create an account at [Botpress.com](https://botpress.com).
2. Create a new bot and choose a template or start from scratch.
3. Once your bot is ready, go to the **Integrations** tab.
4. Select **Webchat**.
5. Copy the **Embed Code** provided.

## 2. Embedding the Chatbot
Open `index.html` and look for the placeholder:
```html
<!-- REPLACE THIS WITH YOUR BOTPRESS EMBED CODE -->
<div id="botpress-placeholder">
    <!-- Paste code here -->
</div>
```
Paste your code right below that comment.

## 3. Customizing for Your Business
The website is designed to be easily adaptable:
- **Logo/Business Name**: Change the text in the `<header>` section of `index.html`.
- **Colors**: Edit the CSS variables in `style.css` under `:root`.
- **Niches**: The "Services" or "Industries" section can be updated to match your specific focus (e.g., changing "Clinics" to "Boutiques").

## 4. Local Development
To view your changes:
1. Open `index.html` directly in your browser.
2. Or use a local server like Live Server (VS Code extension).
