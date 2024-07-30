// script.js
function toggleForm() {
    const form = document.getElementById('request-form');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

async function submitRequest() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const discord = document.getElementById('discord').value;
    const request = document.getElementById('request').value;

    if (!validateEmail(email)) {
        alert('Prosím zadejte platný email.');
        return;
    }

    if (countWords(request) < 15) {
        alert('Prosím zadejte žádost obsahující minimálně 15 slov.');
        return;
    }

    const webhookURL = 'https://discord.com/api/webhooks/1263235238541136068/4Dyar_zMkCcxtzLMDohwGY-8FKPdSRStpOlojyUQ4VoxgK1wj8Y8cVlYrSClsg8_VT5s';

    const data = {
        content: `Nová programovací žádost:\nJméno: ${firstName} ${lastName}\nEmail: ${email}\nDiscord: ${discord}\nŽádost: ${request}`
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
