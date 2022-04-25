const btn = document.querySelector('#modal-cta');
const modalBg = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close')
const modalEmail = document.querySelector('#modal-email')
const modalBtn = document.querySelector('#modal-btn');
const thanksMsg = document.querySelector('#modalThank')

let modalState = false;


// Functions 
const outsideClick = (e) => {
    if (e.target === modalBg) {
        modalBg.style.display = "none"
    }
}

const showModal = () => {
    if (modalState === false) {
        modalBg.style.display = 'flex'
        modalState = true;
    }

}

const addMsg = () => {
    thanksMsg.classList.add('success');
    setTimeout(() => thanksMsg.classList.remove('success'), 2000)
}

const email = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
}

// Events //
btn.addEventListener('click', () => {
    modalBg.style.display = "flex"
})

closeBtn.addEventListener('click', () => {
    modalBg.style.display = "none"
})

window.addEventListener('click', outsideClick)

document.body.addEventListener('mouseleave', () => {
    showModal();
})

modalBtn.addEventListener('click', () => {

    if (modalEmail.value === '') {
        alert('Please type valid email')
    } else if (!email(modalEmail.value)) {
        alert("not valid email")
    } else {
        addMsg()
        setTimeout(() => modalBg.style.display = 'none', 2000)
    }
    modalEmail.value = ''
})