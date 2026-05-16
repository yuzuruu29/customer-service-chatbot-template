// Main JavaScript for PinoyBot Demo

document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Mock Chatbot Interaction
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    const responses = {
        'hi': 'Hello po! How can I help you today?',
        'hello': 'Kamusta! Welcome to our demo.',
        'magkano': 'Ang aming pricing ay nag-start sa free tier (Sari-Sari) hanggang ₱999/mo (Negosyo). Check out our Pricing section below!',
        'location': 'Nasa demo website ka po ng PinoyBot. Pwede naming i-setup ang sarili mong bot sa business location mo.',
        'default': 'Pasensya na po, hindi ko naintindihan. Pwede niyo pong i-type ang "magkano" o "kamusta".'
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

        // Simulate bot thinking
        setTimeout(() => {
            let reply = responses.default;
            for (const key in responses) {
                if (text.includes(key)) {
                    reply = responses[key];
                    break;
                }
            }
            addMessage(reply, 'bot');
        }, 600);
    }

    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSend();
    });

    // Smooth Scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handling (Mock)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'Sending...';
            
            setTimeout(() => {
                btn.textContent = 'Message Sent! ✅';
                btn.style.backgroundColor = '#10b981';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1500);
        });
    }
});
