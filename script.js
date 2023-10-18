const questionSection = document.querySelectorAll(".question-section")

function toggleAnswer() {
    const itemToggle = this.getAttribute('data-expanded');

    for (i = 0; i < questionSection.length; i++) {
        questionSection[i].setAttribute('data-expanded', 'false')
    }

    if (itemToggle == 'false') {
        this.setAttribute('data-expanded', 'true');
    }
}

questionSection.forEach(item => item.addEventListener('click', toggleAnswer));