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
        programmingCapabilities: "Dokážu naprogramovat discord bota, webovky, atd.",
        instagramBtn: "Instagram",
        youtubeBtn: "YouTube",
        discordBtn: "Discord",
        spotify: "Spotify oblíbený umělec (18+)",
        shopButton: "Navštivte náš obchod",
        languageToggleButton: "🚩Jazyky / Languages🚩",
        errors: {
            invalidEmail: "Prosím zadejte platný email.",
            minWords: "Prosím zadejte žádost obsahující minimálně 15 slov.",
            requestSent: "Žádost byla úspěšně odeslána!",
            requestFailed: "Došlo k chybě při odesílání žádosti.",
            generalError: "Došlo k chybě při odesílání žádosti: "
        }
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
        programmingCapabilities: "I can program a Discord bot, websites, etc.",
        instagramBtn: "Instagram",
        youtubeBtn: "YouTube",
        discordBtn: "Discord",
        spotify: "Spotify Favorite Artist (18+)",
        shopButton: "Shop",
        languageToggleButton: "🚩Languages / Jazyky🚩",
        errors: {
            invalidEmail: "Please enter a valid email address.",
            minWords: "Please enter a request containing at least 15 words.",
            requestSent: "Your request has been successfully sent!",
            requestFailed: "There was an error sending the request.",
            generalError: "There was an error sending the request: "
        }
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
        programmingCapabilities: "Ich kann einen Discord-Bot, Websites usw. programmieren.",
        instagramBtn: "Instagram",
        youtubeBtn: "YouTube",
        discordBtn: "Discord",
        spotify: "Spotify Lieblingskünstler (18+)",
        shopButton: "Shop",
        languageToggleButton: "🚩Sprachen / Languages🚩",
        errors: {
            invalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
            minWords: "Bitte geben Sie eine Anfrage mit mindestens 15 Wörtern ein.",
            requestSent: "Ihre Anfrage wurde erfolgreich gesendet!",
            requestFailed: "Beim Senden der Anfrage ist ein Fehler aufgetreten.",
            generalError: "Beim Senden der Anfrage ist ein Fehler aufgetreten: "
        }
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
        programmingCapabilities: "Je peux programmer un bot Discord, des sites Web, etc.",
        instagramBtn: "Instagram",
        youtubeBtn: "YouTube",
        discordBtn: "Discord",
        spotify: "Spotify Artiste préféré (18+)",
        shopButton: "Boutique",
        languageToggleButton: "🚩Langues / Languages🚩",
        errors: {
            invalidEmail: "Veuillez entrer une adresse e-mail valide.",
            minWords: "Veuillez entrer une demande contenant au moins 15 mots.",
            requestSent: "Votre demande a été envoyée avec succès !",
            requestFailed: "Une erreur s'est produite lors de l'envoi de la demande.",
            generalError: "Une erreur s'est produite lors de l'envoi de la demande : "
        }
    }
};

let currentLanguage = 'cs'; // Default language

function toggleForm() {
    const form = document.getElementById('request-form');
    form.style.display = form.style.display === 'flex' ? 'none' : 'flex';
}

function toggleLanguageBar() {
    const languageOptions = document.getElementById('language-options');
    languageOptions.style.display = languageOptions.style.display === 'flex' ? 'none' : 'flex';
}

function changeLanguage(language) {
    currentLanguage = language;
    const elements = {
        title: document.title,
        heading: document.querySelector('h1'),
        programmingRequests: document.getElementById('request-button'),
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        email: document.getElementById('email'),
        discord: document.getElementById('discord'),
        request: document.getElementById('request'),
        errorMessage: document.querySelector('.error-message'),
        submit: document.querySelector('.submit-button button'),
        programmingCapabilities: document.querySelector('.request-form b'),
        instagramBtn: document.getElementById('instagram-btn'),
        youtubeBtn: document.getElementById('youtube-btn'),
        discordBtn: document.getElementById('discord-btn'),
        spotify: document.getElementById('spotify'),
        shopButton: document.getElementById('shop-button'),
        languageToggleButton: document.querySelector('.language-button')
    };

    document.title = translations[language].title;
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
    elements.instagramBtn.textContent = translations[language].instagramBtn;
    elements.youtubeBtn.textContent = translations[language].youtubeBtn;
    elements.discordBtn.textContent = translations[language].discordBtn;
    elements.spotify.textContent = translations[language].spotify;
    elements.shopButton.textContent = translations[language].shopButton;
    elements.languageToggleButton.textContent = translations[language].languageToggleButton;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('language-bar').style.display = 'flex';
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

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
        alert(translations[currentLanguage].errors.invalidEmail);
        return;
    }

    if (countWords(request) < 15) {
        alert(translations[currentLanguage].errors.minWords);
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
            alert(translations[currentLanguage].errors.requestSent);
            document.getElementById('request-form').reset();
            toggleForm();
        } else {
            alert(translations[currentLanguage].errors.requestFailed);
        }
    } catch (error) {
        alert(translations[currentLanguage].errors.generalError + error);
    }
}
