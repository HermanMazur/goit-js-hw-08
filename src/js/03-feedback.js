
import throttle from "lodash.throttle";

const STORADE_KEY = "feedback-form-state";
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormDataInput);
populateFormData();

function onFormDataInput(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
}


function onFormDataInput(evt) {
    
}