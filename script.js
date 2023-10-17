const questionSection = document.querySelectorAll(".question-section")

function toggleAnswer() {
    const itemToggle = this.getAttribute('aria-expanded');

    for (i = 0; i < questionSection.length; i++) {
        questionSection[i].setAttribute('aria-expanded', 'false')
    }

    if (itemToggle == 'false') {
        this.setAttribute('aria-expanded', 'true');
    }
}

questionSection.forEach(item => item.addEventListener('click', toggleAnswer));