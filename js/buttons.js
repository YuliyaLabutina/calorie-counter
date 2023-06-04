import { calculationWeight,getValueOption,checkboxesChecked,getCheckedCheckBoxes } from './calculations.js';
import { clickActivity } from './checked.js';
//кнопки рассчитать и очистить
const buttonCalculate = document.querySelector('.form__submit-button');
const buttonClear = document.querySelector('.form__reset-button');
// кнопки мужской/женский
const genders = document.querySelectorAll('.switcher__item');
const inputGenderMale = document.querySelector('#gender-male');
const inputGenderFemale = document.querySelector('#gender-female');
//возраст/рост/вес
const options = document.querySelectorAll('.input__wrapper input');
//радио
const radio = document.querySelectorAll('.radio__wrapper input');
const a=[];
//все для очистки
function activeButtonClear(){
  buttonClear.removeAttribute('disabled');
}
genders.forEach((gender)=> {
  gender.addEventListener('click',activeButtonClear);
});
options.forEach((option) => {
  option.addEventListener('click', activeButtonClear);
});
radio.forEach((el) => {
  el.addEventListener('click', activeButtonClear);
});
function clearRadioAll(){
  getCheckedCheckBoxes();
  if (checkboxesChecked[0] === 'female') {
    inputGenderFemale.removeAttribute('checked');
  }
  document.querySelector(`#activity-${checkboxesChecked[1]}`).removeAttribute('checked');
}
//очистка
buttonClear.addEventListener('click',() =>{
  clearRadioAll();
  checkboxesChecked.length=0;
  options.forEach((option)=>{
    option.placeholder=0;
  });
  document.querySelector('#activity-minimal').setAttribute('checked', 'checked');
  inputGenderMale.setAttribute('checked', 'checked');
  document.querySelector('.counter__result').classList.add('counter__result--hidden');
  a.length=0;
  buttonCalculate.setAttribute('disabled','disabled');
  //чтобы очищались посчитанные данные?
});
//активация кнопки расчитать
function activeButtonCalculate(){
  options.forEach((option) => {
    option.addEventListener('blur',()=>{
      a.push(option.value);
      if (a.length===3) {
        buttonCalculate.removeAttribute('disabled');
      }
    });
  },{once:true});
}
activeButtonCalculate();
//работа с кнопкой расчитать
function buttonCalculateClick(){
  buttonCalculate.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('.counter__result').classList.remove('counter__result--hidden');
    getValueOption();
    calculationWeight();
    clickActivity();
  });
}
buttonCalculateClick();

