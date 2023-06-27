import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = "feedback-form-state";
feedbackForm.addEventListener('input', onInput);
feedbackForm.addEventListener("submit", throttle(onSubmit),500 );

gettingDataFromLocalCtorage();


function onInput(evt) {
const formData = {email: feedbackForm.email.value , message: feedbackForm.message.value};
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}


function onSubmit(evt) {
  evt.preventDefault();

  console.dir(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  feedbackForm.reset();
  localStorage.clear();
}

function gettingDataFromLocalCtorage() {
  const localStorageValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (localStorageValue) {
    feedbackForm.email.value = localStorageValue.email;
    feedbackForm.message.value = localStorageValue.message;
  }
};