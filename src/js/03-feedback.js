const _ = require('lodash');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');

//-------------Local storage----------
const storage = {
  addItem(key, value) {
    const result = JSON.stringify(value);
    return localStorage.setItem(key, result);
  },

  getItem(key) {
    try {
      const payload = localStorage.getItem(key);
      return JSON.parse(payload);
    } catch (error) {
      console.log(error);
    }
  },
};

//------------------------------------

//--------------------------------------------
const formState = {
  email: '',
  message: '',
};

addEventListener('DOMContentLoaded', function () {
  if (!storage.getItem('feedback-form-state')) {
    storage.addItem('feedback-form-state', formState);
  }
  emailInput.value = storage.getItem('feedback-form-state').email;
  formMessage.value = storage.getItem('feedback-form-state').message;
});

const emailInputHandler = function (event) {
  formState.email = event.currentTarget.value;
  storage.addItem('feedback-form-state', formState);

  console.log('form state: ', formState);
};
emailInput.addEventListener('input', emailInputHandler);

const messageFormHandler = function (event) {
  formState.message = event.currentTarget.value;
  storage.addItem('feedback-form-state', formState);
  //console.log(localStorage);
};
formMessage.addEventListener('input', messageFormHandler);

const submitHandler = function (event) {
  event.preventDefault();

  console.log(localStorage);
  event.currentTarget.reset();
  localStorage.clear();
};
form.addEventListener('submit', submitHandler);
//-------------------------------------------
