// DOM elements
const header = document.querySelector('header');
const navBtn = document.querySelector('nav .btn-nav');
const form = document.querySelector('form');
const list = document.querySelector('#listContainer');
const currentAmountText = document.querySelector('#currentAmount').textContent;
const currentBarProgress = document.querySelector('#currentProgress');
const backProject = document.querySelector('#backProject');

const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('#closeModalBtn');
const selectRewardButtons = document.querySelectorAll('.reward');
const inputGroup = document.querySelectorAll("input[name='reward-group']");

// assets
const navBtnOpen = './images/icon-hamburger.svg';
const navBtnClose = './images/icon-close-menu.svg';

// features
const MAX_AMOUNT = 100000;
let currentAmount = currentAmountText.replace(/\D/, '');

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
};
const addClassSelected = (element) => {
  const card = element.parentElement.parentElement.parentElement;

  document.querySelector('.selected')?.classList.remove('selected');
  card.classList.add('selected');
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
    inputGroup[i + 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
    addClassSelected(inputGroup[i + 1]);
  });
}

inputGroup.forEach((input) => {
  input.addEventListener('click', () => {
    addClassSelected(input);
    input.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  });
});

closeModalBtn.addEventListener('click', () => {
  modalClose();
});

navBtn.addEventListener('click', () => {
  list.classList.toggle('sr-only');

  if (list.classList.contains('sr-only')) {
    list.ariaExpanded = 'false';
    navBtn.firstElementChild.src = navBtnOpen;
  } else {
    list.ariaExpanded = 'true';
    navBtn.firstElementChild.src = navBtnClose;
  }
});

document.addEventListener('click', (e) => {
  const isModalOpen = modal.hasAttribute('opened');

  if (isModalOpen) {
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
