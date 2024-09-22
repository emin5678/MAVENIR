

const items = document.querySelectorAll('.homepage-sec5-item');

items.forEach(item => {
    item.addEventListener('mouseenter', () => {
        items.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.opacity = '0.3';
                otherItem.style.filter = 'saturate(0.3)'; 
            }
        });
    });

    item.addEventListener('mouseleave', () => {
        items.forEach(otherItem => {
            otherItem.style.opacity = '1'; 
            otherItem.style.filter = 'saturate(1)'; 
        });
    });
});

const redline = document.querySelector('.vertical-redline');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        redline.style.top = `${link.offsetTop + 4}px`;
        redline.style.left = `${link.offsetLeft - 32}px`;
    });
});