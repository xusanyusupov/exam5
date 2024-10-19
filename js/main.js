let base__API = 'https://fakestoreapi.com'

let topHeaderNone = document.querySelector('.fa-solid.fa-xmark');
let top__header = document.querySelector('.top__header');


topHeaderNone.addEventListener('click', () => {
    top__header.style.display = 'none'
    sessionStorage.setItem('topHeader', 'none')
});

let menu = document.querySelector('.fa-solid.fa-bars')
let saidbar = document.querySelector('.header__item-wrapper')
let saidbarHide = document.querySelector('.fa-regular.fa-circle-xmark')
let load = document.querySelector('.load')



let item_card = document.createElement('div')
item_card.classList.add('item__card')



menu.addEventListener('click', () => {
    saidbar.style.left = '0px'
})
saidbarHide.addEventListener('click', () => {
    saidbar.style.left = '-300px'
})

let limit = 8
let offset = 1

// card created start 
let card__wrapper = document.querySelector('.card__wrapper')
let seeMore = document.querySelector('.seeMore')



async function getData(endpoint, count) {
    let response = await fetch(`${base__API}/${endpoint}?limit=${limit * count}`)
    response
        .json()
        .then(res => createdCards(res))
        .catch(err => console.log(err))
        .finally(() => {
            load.style.display = 'none'
        })
}
getData('products', offset)

function createdCards(data) {
    while (card__wrapper.firstChild) {
        card__wrapper.firstChild.remove()
    }
    data.forEach(item => {

        card__wrapper.innerHTML += `
        <div data-id="${item.id}" class="item__card">
        <div>
            <img src=${item.image} class="card__img" alt="">
           <div class="card__img-more">
            <i id="like" class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-eye"></i>
           </div>
           <div class="card__hover">
                <b>Add To Card</b>
           </div>
        </div>
        <strong class="card__title">${item.title}</strong><br>
        <span class="spb">${item.price}$  <p>${item.rating.rate} <i class="fa-regular fa-star"></i></p></span>
        </div>
        `
    })
}



let categoryCARD = document.querySelectorAll('.category__wrapper .card')


async function createCATEGORY(endpoint) {
    let res = await fetch(`${base__API}/${endpoint}`)
    res
        .json()
        .then(respons => createLIST(respons))
        .catch(errorr => console.log(errorr))
}

createCATEGORY('products/categories')
let cateType = 'products'
function createLIST(info) {
    categoryCARD.forEach((el) => {
        el.addEventListener('click', () => {
            cateType = "products/" + el.getAttribute('data-value')
            getData(`${cateType}`, offset)
        })
    })
}


seeMore.addEventListener('click', () => {
    offset++
    getData(cateType, offset)
})


card__wrapper.addEventListener('click', (e) => {
    if (e.target.className === "card__img") {
        let id = e.target.closest('.item__card').getAttribute('data-id')
        console.log(id);
        open(`/pages/dpage.html?id=${id}`, '_self')
    }
})




