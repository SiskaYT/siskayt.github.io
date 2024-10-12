// script.js

function validateForm() {
    let firstName = document.getElementById('first-name').value.trim();
    let lastName = document.getElementById('last-name').value.trim();
    let email = document.getElementById('email').value.trim();
    let request = document.getElementById('request').value.trim();

    if (!firstName || !lastName || !email || !request) {
        alert('Vyplňte prosím všechna pole.');
        return false;
    }

    if (request.split(' ').length < 15) {
        alert('Popis požadavku musí obsahovat alespoň 15 slov.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Zadejte platný email.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function submitRequest() {
    if (validateForm()) {
        let formData = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            email: document.getElementById('email').value,
            request: document.getElementById('request').value,
        };

        // Vytvoříme zprávu, kterou pošleme na Discord přes webhook
        let discordMessage = {
            content: `**Nová zakázka**\n\n**Křestní jméno**: ${formData.firstName}\n**Příjmení**: ${formData.lastName}\n**Email**: ${formData.email}\n**Požadavek**: ${formData.request}`
        };

        // Odešleme data pomocí Discord Webhooku
        fetch('https://discord.com/api/webhooks/1263235238541136068/4Dyar_zMkCcxtzLMDohwGY-8FKPdSRStpOlojyUQ4VoxgK1wj8Y8cVlYrSClsg8_VT5s', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(discordMessage),
        })
        .then(response => {
            if (response.ok) {
                alert('Vaše žádost byla úspěšně odeslána!');
            } else {
                alert('Nastala chyba při odesílání žádosti.');
            }
        })
        .catch((error) => {
            console.error('Chyba:', error);
            alert('Nastala chyba při odesílání žádosti.');
        });
    }
}
