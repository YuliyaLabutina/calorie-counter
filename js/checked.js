//гендер
const inputGenderMale = document.querySelector('#gender-male');
const inputGenderFemale = document.querySelector('#gender-female');
inputGenderFemale.addEventListener('click',()=>{
  inputGenderMale.removeAttribute('checked');
  inputGenderFemale.setAttribute('checked','checked');
});
inputGenderMale.addEventListener('click', () => {
  inputGenderFemale.removeAttribute('checked');
  inputGenderMale.setAttribute('checked', 'checked');
});
//активность
const radio = document.querySelectorAll('.radio__wrapper input');
function radioCheckedRemove(){
  radio.forEach((el) => {
    el.removeAttribute('checked');});
}

function clickActivity(){
  radio.forEach((el) => {
    el.addEventListener('click', ()=>{
      radioCheckedRemove();
      document.querySelector(`#activity-${el.value}`).setAttribute('checked', 'checked');
    });
  });
}
clickActivity();
export{clickActivity};
