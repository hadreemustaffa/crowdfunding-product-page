// DOM elements
const backProject = document.querySelector('#backProject');
const modal = document.querySelector('dialog');
const closeModalBtn = document.querySelector('#closeModalBtn');
const header = document.querySelector('header');
const navBtn = document.querySelector('nav .btn-nav');
const list = document.querySelector('#listContainer');
const currentBarProgress = document.querySelector('#currentProgress');
const currentAmountText = document.querySelector('#currentAmount').textContent;
const selectRewardButtons = document.querySelectorAll('#selectReward');

// assets
const navBtnOpen = './images/icon-hamburger.svg';
const navBtnClose = './images/icon-close-menu.svg';

// features
const MAX_AMOUNT = 100000;
let currentAmount = currentAmountText.replace(/\D/, '');

// event listeners
backProject.addEventListener('click', () => {
  modal.showModal();
});
closeModalBtn.addEventListener('click', () => {
  modal.close();
});
modal.addEventListener('onmousedown', () => {
  console.log('test');
});

selectRewardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.showModal();
  });
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

document.addEventListener('scroll', () => {
  if (scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
