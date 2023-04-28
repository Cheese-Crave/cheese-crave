document.addEventListener('DOMContentLoaded', function () {
    const flipButtons = document.querySelectorAll('.flip-button');
    flipButtons.forEach(function (button) {
        button.addEventListener('click', flipForm);
    });
});

function flipForm() {
    const flipElement = document.querySelector('.flip');
    flipElement.classList.toggle('flipped');
}


