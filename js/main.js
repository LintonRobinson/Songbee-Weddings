
// FAQ Functionality


// FAQ Question 1
document.querySelector('.faq-question-1').addEventListener('click', () => {
    document.querySelector('.faq-answer-1').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
    
})

// FAQ Question 2
document.querySelector('.faq-question-2').addEventListener('click', () => {
    document.querySelector('.faq-answer-2').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
})

// FAQ Question 3
document.querySelector('.faq-question-3').addEventListener('click', () => {
    document.querySelector('.faq-answer-3').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-4').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.remove('rotate-180');
})

// FAQ Question 4
document.querySelector('.faq-question-4').addEventListener('click', () => {
    document.querySelector('.faq-answer-4').classList.toggle('faq-answer-active');
    document.querySelector('.faq-caret-4').classList.toggle('rotate-180');
    document.querySelector('.faq-answer-1').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-1').classList.remove('rotate-180');
    document.querySelector('.faq-answer-2').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-2').classList.remove('rotate-180');
    document.querySelector('.faq-answer-3').classList.remove('faq-answer-active');
    document.querySelector('.faq-caret-3').classList.remove('rotate-180');
})

// Hamburger Menu Functionality
document.querySelector('.hamburger-icon').addEventListener('click',() => {
    document.querySelector('.full-screen-mobile-menu-wrapper').classList.toggle('full-screen-mobile-menu-wrapper-hidden')
})