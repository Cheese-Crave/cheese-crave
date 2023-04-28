document.addEventListener('DOMContentLoaded', function () {
    const flipButtons = document.querySelectorAll('.flip-button');
    const signUpButton = document.querySelectorAll('.sign-up');

    flipButtons.forEach(function (button) {
        button.addEventListener('click', flipForm);
    });

    signUpButton.forEach(function (button) {
        button.addEventListener('click', showForm);
    });

    closeButton.forEach(function (button) {
        button.addEventListener('click', hideForm);
    })
});

function showForm() {
    const flipForm = document.getElementById()
}

function flipForm() {
    const flipElement = document.querySelector('.flip');
    flipElement.classList.toggle('flipped');
}


