"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("serviceworker.js").then(
      function (registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

// place your code below

//Prosty edytor tekstu, który zapisuje wiadomość
//... po naciśnięciu w przycisk save.
//Po odświeżeniu przeglądarki i naciśnięciu przycisku load
//... tekst zapisany w local storage zostaje umieszczony
//... w polu textarea.

//Pobieranie elementu za pomocą queryselectora
const formMessage = document.querySelector(".form__message--js");
console.log(formMessage);

//Pobieranie elementu za pomocą queryselectora
const saveMessage = document.querySelector(".form__button--save-js");
console.log(saveMessage);

//Pobieranie elementu za pomocą queryselectora
const loadMessage = document.querySelector(".form__button--load-js");
console.log(loadMessage);

saveMessage.addEventListener("click", (e) => {
  //Zapobiega odświeżeniu przeglądarki po naciśnięciu buttona.
  e.preventDefault();

  //Zapisuje w localStorage klucz message i wartość textarea.
  localStorage.setItem("message", formMessage.value);
});

loadMessage.addEventListener("click", (e) => {
  //Zapobiega odświeżeniu przeglądarki po naciśnięciu buttona,
  //..button przestaje wysyłać formularz metodą GET.
  //Strona nie będzie się przeładowywać po naciśnięciu buttona.
  //Blokuje domyślne zachowanie buttona czyli wysyłanie formularza.
  e.preventDefault();

  //Pobiera wartość z localStorage o kluczu message i umieszcza ją
  //... w polu textarea.
  formMessage.value = localStorage.getItem("message");
});
