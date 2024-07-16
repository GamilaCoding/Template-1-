const nav = document.querySelector('nav');
const closeIcon = document.querySelector('.close');
const openIcon = document.querySelector('.open');

nav.addEventListener('mouseenter', () => {
    closeIcon.style.display = 'none';
    openIcon.style.display = 'inline-block';
    
});

nav.addEventListener('mouseleave', () => {
    closeIcon.style.display = 'inline-block';
    openIcon.style.display = 'none';
});