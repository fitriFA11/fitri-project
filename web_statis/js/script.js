// Tangel class active
const navbarNav = document.querySelector
('.navbar-nav');
// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
}; 

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//Ketika toggle class active untuk dhopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Toggle active untuk login
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink= document.querySelector('.register-link');
const btnpopup= document.querySelector('.popup-login');
const iconclose= document.querySelector('.close');

registerlink.addEventListener('click', ()=> {
wrapper.classList.add('active');
});
loginlink.addEventListener('click', ()=> {
wrapper.classList.remove('active');
});
btnpopup.addEventListener('click', ()=> {
wrapper.classList.add('active-popup');
});
iconclose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});