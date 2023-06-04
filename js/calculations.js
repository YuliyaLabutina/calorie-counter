const optionArray = [];
const inputAge = document.querySelector('#age');
const inputHeight = document.querySelector('#height');
const inputWeight = document.querySelector('#weight');
const caloriesNorm = document.querySelector('#calories-norm');
const caloriesMinimal = document.querySelector('#calories-minimal');
const caloriesMaximal = document.querySelector('#calories-maximal');
const CONST = 0.15;
const activityCoefficients = {
  minimal : 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  maximal: 1.9
};
function getValueOption() {
  optionArray.push(inputAge.value);
  optionArray.push(inputHeight.value);
  optionArray.push(inputWeight.value);
  return optionArray;
}
const checkboxesChecked = [];// 0 - гендер, 1 - активность
function getCheckedCheckBoxes() {
  const checkboxes = document.querySelectorAll('[type = "radio"]');
  for (let index = 0; index < checkboxes.length; index++) {
    if (checkboxes[index].checked) {
      checkboxesChecked.push(checkboxes[index].value);
    }
  }
  return checkboxesChecked;
}
//поддержание веса
function calculationWeightMaintenanceMen(){
  const normMen = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) + 5;
  const maintenanceMenActivity = normMen * activityCoefficients[checkboxesChecked[1]];
  caloriesNorm.textContent = maintenanceMenActivity;
}
function calculationWeightMaintenanceWoman(){
  const normWoman = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) - 161;
  const maintenanceWomanActivity = normWoman * activityCoefficients[checkboxesChecked[1]];
  caloriesNorm.textContent = maintenanceWomanActivity;
}
//снижение веса
function  calculationWeightLossMen(){
  const normMen = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) + 5;
  const normMenActivity = normMen * activityCoefficients[checkboxesChecked[1]];
  const lossMen = normMenActivity - normMenActivity*CONST;
  caloriesMinimal.textContent=lossMen;
}
function calculationWeightLossWoman(){
  const normWoman = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) - 161;
  const normWomanActivity = normWoman * activityCoefficients[checkboxesChecked[1]];
  const lossWoman = normWomanActivity - normWomanActivity * CONST;
  caloriesMinimal.textContent = lossWoman;
}
//набор веса
function calculationWeightGainMen() {
  const normMen = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) + 5;
  const normMenActivity = normMen * activityCoefficients[checkboxesChecked[1]];
  const gainMen = normMenActivity + normMenActivity * CONST;
  caloriesMaximal.textContent = gainMen;
}
function calculationWeightGainWoman() {
  const normWoman = (10 * optionArray[2]) + (6.25 * optionArray[1]) - (5 * optionArray[0]) - 161;
  const normWomanActivity = normWoman * activityCoefficients[checkboxesChecked[1]];
  const gainWoman = normWomanActivity + normWomanActivity * CONST;
  caloriesMaximal.textContent = gainWoman;
}
//общая формула расчета веса
function calculationWeight (){
  getCheckedCheckBoxes();
  if (checkboxesChecked[0] === 'male') {
    calculationWeightMaintenanceMen();
    calculationWeightLossMen();
    calculationWeightGainMen();
  }
  else {calculationWeightMaintenanceWoman();
    calculationWeightLossWoman();
    calculationWeightGainWoman();
  }
}

export {calculationWeight,getValueOption,checkboxesChecked,getCheckedCheckBoxes};
