// DOM elements
const header = document.querySelector('header');
const navButton = document.querySelector('nav .btn-nav');
const form = document.querySelector('form');
const list = document.querySelector('#listContainer');
const currentPledgeAmount = document.querySelector('#currentAmount');
const currentBackersAmount = document.querySelector('.backers__title');
const currentBarProgress = document.querySelector('#currentProgress');
const backProject = document.querySelector('#backProject');

const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('#closeModalBtn');
const selectRewardButtons = document.querySelectorAll('.reward');
const inputRadios = document.querySelectorAll("input[name='reward-group']");
const amountInStock = document.querySelectorAll('.card__stock span');
const successMessage = document.querySelector('.success');
const successMessageButton = document.querySelector('#closeMessage');

// assets
const navButtonOpen = './images/icon-hamburger.svg';
const navButtonClose = './images/icon-close-menu.svg';

// features
const MAX_AMOUNT = 100000;
let updatedPledgeAmount;
let updatedBackers;

amountInStock.forEach((amount) => {
  const convertedAmount = Number(amount.textContent);
  if (convertedAmount < 1) {
    amount.closest('.card').classList.add('card--disabled');
  }
});

const calculateProgress = () => {
  let totalPledgeAmount = Number(
    currentPledgeAmount.textContent.replace(/\D/, '')
  );
  let widthInPercent = (totalPledgeAmount / MAX_AMOUNT) * 100;

  currentBarProgress.style.width = `${widthInPercent}%`;
};

calculateProgress();

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

const removeDuplicateClass = () => {
  document.querySelector('.selected')?.classList.remove('selected');
};

const addClassSelected = (element) => {
  removeDuplicateClass();
  element.classList.add('selected');
};

const scrollIntoView = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

const validateForm = () => {
  const card = document.querySelector('.card.selected');
  const cardInputNumber = card.querySelector("input[type='number']");
  let totalPledgeAmount = Number(
    currentPledgeAmount.textContent.replace(/\D/, '')
  );
  let inputValue = Number(cardInputNumber.value);

  const calculatePledgeAmount = () => {
    updatedAmount = inputValue + totalPledgeAmount;
    currentPledgeAmount.textContent = updatedAmount.toLocaleString('en-US', {
      style: 'decimal',
      trailingZeroDisplay: 'stripIfInteger',
    });
    calculateProgress(updatedAmount);
  };

  if (
    !cardInputNumber.parentElement.classList.contains('error') &&
    inputValue != ''
  ) {
    calculatePledgeAmount();
    successMessage.style.display = 'flex';
    form.style.display = 'none';
  }

  if (inputValue == '') {
    cardInputNumber.parentElement.classList.add('error');
  }
};

// event listeners
backProject.addEventListener('click', () => {
  removeDuplicateClass();
  modalOpen();

  inputRadios.forEach((radio) => {
    radio.checked = false;
    if (radio.id == 'input1') {
      radio.focus();
      radio.checked = true;
      addClassSelected(radio.closest('.card'));
      scrollIntoView(radio.closest('.card'));
    }
  });
});

for (let i = 0; i < selectRewardButtons.length; i++) {
  selectRewardButtons[i].addEventListener('click', () => {
    modalOpen();
    inputRadios[i + 1].checked = true;
    scrollIntoView(inputRadios[i + 1].closest('.card'));
    addClassSelected(inputRadios[i + 1].closest('.card'));
  });
}

inputRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    addClassSelected(radio.closest('.card'));
    scrollIntoView(radio.closest('.card'));
  });
});

closeModalButton.addEventListener('click', () => {
  modalClose();
});

form.addEventListener('input', (e) => {
  const selectedCard = document.querySelector('.card.selected');
  const inputNumber = selectedCard.querySelector("input[type='number']");

  if (e.target == inputNumber) {
    let input = e.target.value.slice(0, 4);

    e.target.value = input;

    if (input == '') {
      inputNumber.parentElement.classList.add('error');
    } else {
      inputNumber.parentElement.removeAttribute('class');
    }
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateForm('form');
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

successMessageButton.addEventListener('click', () => {
  modalClose();
});

document.addEventListener('mouseup', (e) => {
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
