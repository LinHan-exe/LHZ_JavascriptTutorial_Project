const navbar = document.querySelectorAll("li");
navbar.addEventListener('mouseover', () => {
    navbar.style.backgroundColor = 'gray';
});

navbar.addEventListener('mouseout', () => {
    navbar.style.backgroundColor = 'black';
});