// DOM elements
const header = document.querySelector('header');
const navButton = document.querySelector('nav .btn-nav');
const form = document.querySelector('form');
const list = document.querySelector('#listContainer');
const currentAmountText = document.querySelector('#currentAmount').textContent;
const currentBarProgress = document.querySelector('#currentProgress');
const backProject = document.querySelector('#backProject');

const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('#closeModalBtn');
const selectRewardButtons = document.querySelectorAll('.reward');
const inputGroup = document.querySelectorAll("input[name='reward-group']");
const amountInStock = document.querySelectorAll('.card__stock span');
const successMessage = document.querySelector('.success');
const messageButton = document.querySelector('#closeMessage');

// assets
const navButtonOpen = './images/icon-hamburger.svg';
const navButtonClose = './images/icon-close-menu.svg';

// features
const MAX_AMOUNT = 100000;
let currentAmount = currentAmountText.replace(/\D/, '');

amountInStock.forEach((amount) => {
  const convertedAmount = Number(amount.textContent);
  if (convertedAmount < 1) {
    amount.closest('.card').classList.add('card--disabled');
  }
});

const modalOpen = () => {
  modal.style.display = 'flex';
  modal.setAttribute('opened', '');

  if ((modal.style.display = 'flex')) {
    document.body.style.overflow = 'hidden';
  }
};

const modalClose = () => {
  modal.removeAttribute('style');
  document.body.removeAttribute('style');
  modal.removeAttribute('opened');
  successMessage.removeAttribute('style');
  form.removeAttribute('style');
};

const addClassSelected = (element) => {
  const card = element.parentElement.parentElement.parentElement;

  document.querySelector('.selected')?.classList.remove('selected');
  card.classList.add('selected');
};

const scrollIntoView = (input) => {
  const card = input.closest('.card');
  card.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

// event listeners
backProject.addEventListener('click', () => {
  document.querySelector('.selected')?.classList.remove('selected');
  modalOpen();

  inputGroup.forEach((reward) => {
    if (reward.id == 'input1') {
      reward.setAttribute('autofocus', '');
    }
    reward.checked = false;
  });
});

for (let i = 0; i < selectRewardButtons.length; i++) {
  selectRewardButtons[i].addEventListener('click', () => {
    modalOpen();
    inputGroup[i + 1].checked = true;
    scrollIntoView(inputGroup[i + 1]);
    addClassSelected(inputGroup[i + 1]);
  });
}

inputGroup.forEach((input) => {
  input.addEventListener('click', () => {
    addClassSelected(input);
    scrollIntoView(input);
  });
});

closeModalButton.addEventListener('click', () => {
  modalClose();
});

form.addEventListener('submit', () => {
  successMessage.style.display = 'flex';
  form.style.display = 'none';
});

navButton.addEventListener('click', () => {
  list.classList.toggle('sr-only');

  if (list.classList.contains('sr-only')) {
    list.ariaExpanded = 'false';
    navButton.firstElementChild.src = navButtonOpen;
  } else {
    list.ariaExpanded = 'true';
    navButton.firstElementChild.src = navButtonClose;
  }
});

messageButton.addEventListener('click', () => {
  modalClose();
});

document.addEventListener('click', (e) => {
  const isModalOpen = modal.hasAttribute('opened');

  if (isModalOpen) {
    if (e.target == modal) {
      modalClose();
    }
  }

  if (isModalOpen && successMessage.hasAttribute('style')) {
    if (e.target == modal) {
      modalClose();
    }
  }
});
document.addEventListener('keydown', (e) => {
  const isModalOpen = modal.hasAttribute('opened');

  if (isModalOpen) {
    if (e.key === 'Escape') {
      modalClose();
    }
  }
});
document.addEventListener('scroll', () => {
  if (scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
