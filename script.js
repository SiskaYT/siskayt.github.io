// script.js
function toggleForm() {
    const form = document.getElementById('request-form');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

async function submitRequest() {
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;
    const request = document.getElementById('request').value;

    const webhookURL = 'https://discord.com/api/webhooks/1263235238541136068/4Dyar_zMkCcxtzLMDohwGY-8FKPdSRStpOlojyUQ4VoxgK1wj8Y8cVlYrSClsg8_VT5s'; // Zde zadejte váš webhook URL

    const data = {
        content: `Nová programovací žádost:\nEmail: ${email}\nDiscord: ${discord}\nŽádost: ${request}`
    };

    try {
        const response = await fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            alert('Žádost byla úspěšně odeslána!');
            document.getElementById('request-form').reset();
            toggleForm();
        } else {
            alert('Došlo k chybě při odesílání žádosti.');
        }
    } catch (error) {
        alert('Došlo k chybě při odesílání žádosti: ' + error);
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// Dynamicky generování létajících textů
const animationContainer = document.querySelector('.animation-container');
const textArray = ["A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5A1B2C3D4EHGZHASGZAS54G84Z5AG58S65Z84G8S58Z4A8G48S8Z5895A9G559S9959Z99G5AZSGAZSGAZ851202550S5GZSGZA4GZS5", "F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0F6G7H8I9J0", "K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5K1L2M3N4O5"];
const numberOfTexts = 10;

for (let i = 0; i < numberOfTexts; i++) {
    const span = document.createElement('span');
    span.classList.add('moving-text');
    span.textContent = textArray[Math.floor(Math.random() * textArray.length)];
    span.style.top = `${Math.random() * 100}%`;
    span.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5s až 10s
    span.style.animationDelay = `${Math.random() * 10}s`;
    animationContainer.appendChild(span);
}