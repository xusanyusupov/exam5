let base__API = 'https://fakestoreapi.com'
let load = document.querySelector('.load')
let menu = document.querySelector('.fa-solid.fa-bars')
let saidbar = document.querySelector('.header__item-wrapper')
let saidbarHide = document.querySelector('.fa-regular.fa-circle-xmark')
let info__wrapper = document.querySelector('.info__wrapper')






menu.addEventListener('click', () => {
    saidbar.style.left = '0px'
})
saidbarHide.addEventListener('click', () => {
    saidbar.style.left = '-300px'
})




let urlID = new URLSearchParams(window.location.search)
let id =  urlID.get('id')
async function getDpageDATA(endpoint){
    let res = await fetch(`${base__API}/products/${endpoint}`)
    res 
    .json()
    .then(res => createInfo(res))
    .catch(err => console.log(err))
    .finally(() => {
        load.style.display = 'none'
    })
}
getDpageDATA(id)

function createInfo(data){
    info__wrapper.innerHTML += `
    <div class="info__img">
        <img src="${data.image}" alt="">
    </div>
    <div class="info__text">
        <strong class="info__title">${data.title}</strong>
        <div class="info__brand"><p>${data.category}</p></div>
        <b class="info__price">$ ${data.price}</b>
        <p class="info__desc">${data.description}</p>
        <div class="info__size-btn">
            <b>Size :</b>
            <button>XS</button>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
        </div>
        <div class="info__add-or-remove">
            <button id="ayirish">-</button>
            <span id="sanovchi">0</span>
            <button id="add">+</button>
        </div>
        <div class="item__task-wrapper">
            <div class="info__task">
                <img src="../images/deliver.png" alt="">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br> Obcaecati voluptatibus dolor corporis ipsa nisi inventore quam!</p>
            </div>
            <div class="info__task border">
                <img src="../images/qayta ishlash.png" alt="">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br> Aliquam temporibus dolor sequi sapiente quis in eligendi.</p>
            </div>
        </div>
    </div>
    `

    let addBTN = document.querySelector('#add')
    let removeBTN = document.querySelector('#ayirish')
    let sanovchiBTN = document.querySelector('#sanovchi')
    
    
let sanovchi = sessionStorage.getItem('sanovchi') ? parseInt(sessionStorage.getItem('sanovchi')) : 0;

sanovchiBTN.innerText = sanovchi;

addBTN.addEventListener('click', () => {
    sanovchi++;
    sanovchiBTN.innerText = sanovchi
    sessionStorage.setItem('sanovchi', sanovchi)
});

removeBTN.addEventListener('click', () => {
    if (sanovchi > 0) {
        sanovchi--;
        sanovchiBTN.innerText = sanovchi
        sessionStorage.setItem('sanovchi', sanovchi)
    }
});

}
