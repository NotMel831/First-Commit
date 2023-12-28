const btnOpenModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

console.log(btnOpenModal)

const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i <btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

function escBtn(event) {
    if (event.key === 'Escape') {
        closeModal()
        // console.log(event)
    }
}
document.addEventListener('keydown', escBtn)
