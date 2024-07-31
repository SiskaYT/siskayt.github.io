// script.js

const translations = {
    cs: {
        title: "O SiskaYT",
        heading: "Tady je pár socials.",
        programmingRequests: "Programovací zakázky",
        firstName: "Křestní jméno",
        lastName: "Příjmení",
        email: "Váš email",
        discord: "Váš Discord nick (pokud nemáte, nechte -)",
        request: "Co chcete naprogramovat? (minimálně 15 slov)",
        errorMessage: "!Toho erroru si potom nevšímejte!",
        submit: "Odeslat",
        programmingCapabilities: "Dokážu naprogramovat discord bota, webovky, atd."
    },
    en: {
        title: "About SiskaYT",
        heading: "Here are a few socials.",
        programmingRequests: "Programming Requests",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Your Email",
        discord: "Your Discord Nick (if none, leave blank)",
        request: "What do you want to program? (at least 15 words)",
        errorMessage: "Ignore this error!",
        submit: "Submit",
        programmingCapabilities: "I can program a Discord bot, websites, etc."
    },
    de: {
        title: "Über SiskaYT",
        heading: "Hier sind ein paar soziale Netzwerke.",
        programmingRequests: "Programmieranfragen",
        firstName: "Vorname",
        lastName: "Nachname",
        email: "Ihre E-Mail",
        discord: "Ihr Discord-Nick (falls keiner, leer lassen)",
        request: "Was möchten Sie programmieren? (mindestens 15 Wörter)",
        errorMessage: "Ignorieren Sie diesen Fehler!",
        submit: "Einreichen",
        programmingCapabilities: "Ich kann einen Discord-Bot, Websites usw. programmieren."
    },
    fr: {
        title: "À propos de SiskaYT",
        heading: "Voici quelques réseaux sociaux.",
        programmingRequests: "Demandes de programmation",
        firstName: "Prénom",
        lastName: "Nom de famille",
        email: "Votre email",
        discord: "Votre pseudo Discord (si aucun, laissez vide)",
        request: "Que voulez-vous programmer? (au moins 15 mots)",
        errorMessage: "Ignorez cette erreur!",
        submit: "Envoyer",
        programmingCapabilities: "Je peux programmer un bot Discord, des sites Web, etc."
    }
};

function toggleForm() {
    const form = document.getElementById('request-form');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

function toggleLanguageBar() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = languageOptions.style.display === 'flex' ? 'none' : 'flex';
}

function changeLanguage(language) {
    const elements = {
        title: document.title,
        heading: document.querySelector('h1'),
        programmingRequests: document.querySelector('.request-button'),
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        email: document.getElementById('email'),
        discord: document.getElementById('discord'),
        request: document.getElementById('request'),
        errorMessage: document.querySelector('.error-message'),
        submit: document.querySelector('.submit-button button'),
        programmingCapabilities: document.querySelector('.request-form b')
    };

    elements.title = translations[language].title;
    elements.heading.textContent = translations[language].heading;
    elements.programmingRequests.textContent = translations[language].programmingRequests;
    elements.firstName.placeholder = translations[language].firstName;
    elements.lastName.placeholder = translations[language].lastName;
    elements.email.placeholder = translations[language].email;
    elements.discord.placeholder = translations[language].discord;
    elements.request.placeholder = translations[language].request;
    elements.errorMessage.textContent = translations[language].errorMessage;
    elements.submit.textContent = translations[language].submit;
    elements.programmingCapabilities.textContent = translations[language].programmingCapabilities;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function countWords(str) {
    return str.trim().split(/\s+/).length;
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
