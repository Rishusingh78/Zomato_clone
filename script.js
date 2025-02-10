// Adding animation to the input field and logo on page load
document.addEventListener("DOMContentLoaded", function() {
    // Animate the input field
    const searchInput = document.querySelector('main input');
    searchInput.style.opacity = 0;
    searchInput.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        searchInput.style.transition = 'opacity 1s, transform 1s';
        searchInput.style.opacity = 1;
        searchInput.style.transform = 'scale(1)';
    }, 500);

    // Animate the logo
    const logo = document.querySelector('main img');
    logo.style.opacity = 0;
    logo.style.transform = 'translateY(-50px)';

    setTimeout(() => {
        logo.style.transition = 'opacity 1s, transform 1s';
        logo.style.opacity = 1;
        logo.style.transform = 'translateY(0)';
    }, 500);
});

// Add functionality for the search input (basic)
const searchInput = document.querySelector('main input');
searchInput.addEventListener('input', function(e) {
    console.log('Searching for: ' + e.target.value);
    // You can add functionality here to filter or show results dynamically.
});
