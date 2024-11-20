
document.addEventListener("DOMContentLoaded", function() {
    
    const toggleButton = document.getElementById('toggle-button');
    const favicon = document.getElementById('favicon');
    const stylesheet = document.getElementById('stylesheet');
    const image = document.querySelector('td.Dp img.Dp');
    const icon = toggleButton.querySelector('img');

    if (!toggleButton || !favicon || !stylesheet || !image || !icon) {
        console.error("Missing elements");
        return;
    }

    let isDarkMode = false; 

    favicon.href = 'images/1w.png';
    stylesheet.href = 'stylew.css';
    image.src = './images/1w.png';
    icon.src = './images/6b.png';

    toggleButton.addEventListener('click', function() {
        console.log("Toggle button clicked");

        if (isDarkMode) {
            favicon.href = 'images/1w.png';
            stylesheet.href = 'stylew.css';
            image.src = './images/1w.png';
            icon.src = './images/6b.png';
            isDarkMode = false;
        } else {
            favicon.href = 'images/1b.png';
            stylesheet.href = 'styleb.css';
            image.src = './images/1b.png';
            icon.src = './images/6w.png';
            isDarkMode = true;
        }
    });
});