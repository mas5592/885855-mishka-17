const Modal = document.querySelector('.modal');
const productsBlock = document.querySelector('.products');
const modalButton = document.querySelector('.best-product__btn');

if (Modal) {
  if (productsBlock) {
    productsBlock.addEventListener('click', openForm);
  }

  if (modalButton) {
    modalButton.addEventListener('click', openForm);
  }

  Modal.addEventListener('click', closeForm);
  window.addEventListener('keydown', closeForm);
}

function openForm(event) {
  let element = event.target;

  if (
    element.classList.contains('product__order') ||
    element.classList.contains('best-product__btn')
  ) {
    event.preventDefault();
    Modal.classList.add('modal--open');
  }
}

function closeForm(event) {
  let element = event.target;

  if (element.classList.contains('modal') || event.keyCode === 27) {
    Modal.classList.remove('modal--open');
  }
}
