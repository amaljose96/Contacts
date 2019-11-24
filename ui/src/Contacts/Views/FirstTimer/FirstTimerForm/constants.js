function passwordViewModifier(value) {
  let length = (value || "").length;
  let newString = Array(length)
    .fill("*")
    .join("");
  return newString;
}
function phoneNumberFormatter(value){
  return value.replace(/[^0-9]/g, '');
}
function nameFormatter(value){
  return value.replace(/[^A-Za-z\s]/g, '');
}
const formConfig = [
  { keyName: "phoneNumber", label: "Enter Phone Number" , formatter:phoneNumberFormatter},
  { keyName: "name", label: "Enter Name" ,formatter:nameFormatter},
  { keyName: "PIN", label: "Enter PIN", displayModifier: passwordViewModifier },
  {
    kkeyNameey: "RePIN",
    label: "Confirm PIN",
    displayModifier: passwordViewModifier
  }
];

export default formConfig;
