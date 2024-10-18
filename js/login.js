let base_api = 'https://fakestoreapi.com'

let form = document.querySelector('.form')
let inpUserName = document.querySelector('.form input[type=text')
let inpPassword = document.querySelector('.form input[type=password')

const notif = (type, msg) => {
    let notifDiv = document.querySelector('.notif')

    if (!notifDiv) {
        notifDiv = document.createElement('div')
        notifDiv.classList.add('notif')
        document.body.append(notifDiv)
    }
    notifDiv.textContent = msg
    setTimeout(() => {
        notifDiv.classList.add(type)
    }, 500)
    setTimeout(() => {
        notifDiv.classList.remove(type)
    }, 3000)
};

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let user = {
        username: inpUserName.value,
        password: inpPassword.value,
    }
    fetch(`${base_api}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
        .then(res => {
            if (res.ok) {
                notif('success', 'Xush kelibsiz')
                return res.json()
            }
            throw Error('Username yoki password xato !')
        })
        .then(respons => {
            notif('success', 'Xush kelibsiz')
            setTimeout(() => {
                open('../index.html', '_self')
            }, 3000);
        })
        .catch(err => {
            notif('danger', err.message)
        })
        .finally(() => {
            console.log('tugadi');
            inpPassword.value = ''
            inpUserName.value = ''
        })
})








