const createBtn = document.querySelector('.js-create-post');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

function showModal() {
    modal.classList.add('modal-open');
}

function hideModal() {
    modal.classList.remove('modal-open');
}
//lặp qua từng thẻ của button và lắng nghe hành vi click

createBtn.addEventListener('click',showModal)

//lắng nghe hành vi click của button close
modalClose.addEventListener('click',hideModal);

modal.addEventListener('click',hideModal);

modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})