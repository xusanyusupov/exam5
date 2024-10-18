let topHeaderNone = document.querySelector('.fa-solid.fa-xmark');
let top__header = document.querySelector('.top__header');

topHeaderNone.addEventListener('click', () => {
    top__header.style.display = 'none'
    sessionStorage.setItem('topHeader', 'none')
});
