const toggleButton = document.querySelector('.toggle-button');
const navItems = document.querySelector('.navItems');

toggleButton.addEventListener('click', () => {
    navItems.classList.toggle('show');
}); 
const slider = document.querySelector('.slider');
console.log(slider,`slider`)
    function moveSlider(direction) {
        const images = document.querySelectorAll('.slider img');
        if (direction === 'right') {
            slider.appendChild(images[0]);
        } else if (direction === 'left') {
            slider.insertBefore(images[2], images[0]);
        }
        images.forEach(img => {
            img.classList.remove('center');
        });
        slider.children[1].classList.add('center');
        images.forEach(img => {
            img.style.opacity = (img.classList.contains('center')) ? 1 : 0.5;
        });
    }