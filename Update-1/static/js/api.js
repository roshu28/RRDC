// API integration logic for RR Digital Card Services
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

async function createCard(cardData) {
    const response = await fetch('/api/cards/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
    });
    return response.json();
}

async function updateCard(cardId, cardData) {
    const response = await fetch(`/api/cards/${cardId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
    });
    return response.json();
}
