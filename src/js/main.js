"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const formMessage = document.querySelector('.form__message--js');
console.log(formMessage);

const saveMessage = document.querySelector('.form__button--save-js');
console.log(saveMessage);

const loadMessage = document.querySelector('.form__button--load-js');
console.log(loadMessage);

