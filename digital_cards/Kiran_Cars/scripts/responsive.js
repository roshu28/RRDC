window.addEventListener('resize', function() {
    const servicesContainer = document.querySelector('.services-container');
    if (window.innerWidth <= 768) {
        servicesContainer.style.flexDirection = 'column';
        servicesContainer.querySelectorAll('ul').forEach(ul => {
            ul.style.width = '100%';
        });
    } else {
        servicesContainer.style.flexDirection = 'row';
        servicesContainer.querySelectorAll('ul').forEach(ul => {
            ul.style.width = '45%';
        });
    }
});

// Trigger the resize event on page load
window.dispatchEvent(new Event('resize'));
