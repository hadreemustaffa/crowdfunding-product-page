# Frontend Mentor - Crowdfunding product page solution

This is a solution to the [Crowdfunding product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I Learned](#what-i-learned)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/crowdfunding-product-page-using-vanilla-js-trD-X0SLgK)
- Live Site URL: [Github Pages](https://hadreemustaffa.github.io/crowdfunding-product-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I Learned

- scrollIntoView() method - used on selected radio element in the form.

```js
const scrollIntoView = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: 'center' });
};
```

### Useful Resources

- [ScrollIntoView() - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)

## Author

- Frontend Mentor - [@hadreemustaffa](https://www.frontendmentor.io/profile/hadreemustaffa)
