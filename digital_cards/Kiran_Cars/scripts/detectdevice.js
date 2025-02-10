function detectDevice() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}

function handleAddToContacts() {
    var device = detectDevice();
    if (device === "iOS") {
        window.location.href = "Kiran_Cars.vcf";
    } else if (device === "Android") {
        showContactPopup();
    } else {
        showVCFData();
    }
}

function showContactPopup() {
    var popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.backgroundColor = '#fff';
    popup.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';
    popup.style.textAlign = 'center';
    popup.style.borderRadius = '16px';

    var message = document.createElement('p');
    message.textContent = 'Select a number to call:';
    popup.appendChild(message);

    var buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.gap = '10px';
    popup.appendChild(buttonContainer);

    var button1 = document.createElement('button');
    button1.textContent = '9825233012';
    button1.style.padding = '10px 20px';
    button1.style.backgroundColor = '#007bff';
    button1.style.color = '#fff';
    button1.style.border = 'none';
    button1.style.borderRadius = '5px';
    button1.style.cursor = 'pointer';
    button1.onclick = function() {
        window.location.href = 'tel:9825233012';
    };
    buttonContainer.appendChild(button1);

    var button2 = document.createElement('button');
    button2.textContent = '9173811113';
    button2.style.padding = '10px 20px';
    button2.style.backgroundColor = '#007bff';
    button2.style.color = '#fff';
    button2.style.border = 'none';
    button2.style.borderRadius = '5px';
    button2.style.cursor = 'pointer';
    button2.onclick = function() {
        window.location.href = 'tel:9173811113';
    };
    buttonContainer.appendChild(button2);

    var button3 = document.createElement('button');
    button3.textContent = '7265944446';
    button3.style.padding = '10px 20px';
    button3.style.backgroundColor = '#007bff';
    button3.style.color = '#fff';
    button3.style.border = 'none';
    button3.style.borderRadius = '5px';
    button3.style.cursor = 'pointer';
    button3.onclick = function() {
        window.location.href = 'tel:7265944446';
    };
    buttonContainer.appendChild(button4);
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#007bff';
    closeButton.style.color = '#fff';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = function() {
        document.body.removeChild(popup);
    };
    buttonContainer.appendChild(closeButton);

    document.body.appendChild(popup);
}

function showVCFData() {
    var vcfData = `
    Kiran Cars

    VOICE : 9825233012

    VOICE : 9173811113

    VOICE : 7265944446

    ADDRESS : 444/A GLASS COAT ROAD, VIDHYANAGAR G.I.D.C, VITHAL UDYOGNAGAR, Anand, Gujarat.

    EMAIL : anil52789@gmail.com
    `;
    alert(vcfData);
}