// Main JavaScript for the PinoyBot static demo.

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    const responses = {
        hi: 'Hello po! How can I help you today?',
        hello: 'Kamusta! Welcome to our demo.',
        kamusta: 'Kamusta! This is a local demo chat. The live Botpress bot must be connected before launch.',
        magkano: 'Demo pricing starts at PHP 0 and PHP 999/mo. Replace these amounts with the client\'s real pricing before launch.',
        location: 'This is the PinoyBot demo website. Replace this message with the client\'s real business address.',
        reservation: 'This demo can explain reservations, but it does not create bookings until you connect Botpress to a booking workflow.',
        default: 'Pasensya na po, hindi ko naintindihan. Try typing "magkano", "location", or "reservation".'
    };

    function addMessage(text, type) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message message-${type}`;
        msgDiv.textContent = text;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleSend() {
        const text = userInput.value.trim().toLowerCase();
        if (!text) return;

        addMessage(userInput.value, 'user');
        userInput.value = '';

        setTimeout(() => {
            let reply = responses.default;
            Object.keys(responses).some(key => {
                if (text.includes(key)) {
                    reply = responses[key];
                    return true;
                }
                return false;
            });

            addMessage(reply, 'bot');
        }, 400);
    }

    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keydown', event => {
        if (event.key === 'Enter') handleSend();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;

            event.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', event => {
            event.preventDefault();

            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;

            btn.disabled = true;
            btn.textContent = 'Previewing...';

            setTimeout(() => {
                btn.textContent = 'Demo only - no message sent';
                btn.style.backgroundColor = '#64748b';

                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 500);
        });
    }
});
