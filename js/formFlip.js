document.addEventListener('DOMContentLoaded', function () {
    const flipButtons = document.querySelectorAll('.flip-button');

    // add event listeners to each button
    flipButtons.forEach(button => {
        button.addEventListener('click', flipForm);
    });
});

function flipForm() {
    const flipElement = document.querySelector('.flip');
    flipElement.classList.toggle('flipped');
}



