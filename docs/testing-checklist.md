# Chatbot Testing Checklist

Use this before handing the demo to a client or publishing it online.

## Website

- [ ] All navigation links scroll to the correct page sections.
- [ ] `website/hero.png` loads.
- [ ] The page is readable on mobile, tablet, and desktop.
- [ ] Pricing is marked as final or clearly replaced with client-approved pricing.
- [ ] The contact form is either connected to a real endpoint or clearly marked as demo-only.
- [ ] No placeholder social links are shown as real links.

## Botpress

- [ ] Bot imports successfully into Botpress v12.
- [ ] NLU model is trained after import.
- [ ] Each intent has enough phrases for the client's language mix.
- [ ] Fallback response gives a useful next step.
- [ ] Webchat integration is enabled.
- [ ] The website uses the client's real Botpress Webchat embed code.

## Restaurant FAQ Coverage

- [ ] Opening hours are correct.
- [ ] Location, parking, and contact details are correct.
- [ ] Menu, prices, and dietary options are current.
- [ ] Reservation and cancellation policies are accurate.
- [ ] Takeaway and delivery coverage is accurate.
- [ ] Payment methods are accurate and approved by the client.

## Security and Privacy

- [ ] No API keys, Botpress tokens, payment keys, or passwords are committed.
- [ ] Any real contact form validates data server-side.
- [ ] Customer messages are not logged with unnecessary personal data.
- [ ] Privacy policy and terms links are added if the site collects leads.

## Mobile Experience

- [ ] Chat widget does not block important content.
- [ ] Mobile keyboard does not hide the chat input.
- [ ] Buttons are large enough to tap.
- [ ] Page loads acceptably on a mobile connection.
