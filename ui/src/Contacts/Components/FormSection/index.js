import React from "react";
import { FormSectionContainer, SectionLabel, SectionInput } from "./styles";
function FormSection(props) {
  function onValueChange(e) {
    let newValue = e.target.value;
    let formattedValue=props.formatter?props.formatter(newValue):newValue;
    props.setFormData(props.keyName, formattedValue);
  }
  return (
    <FormSectionContainer>
      <SectionLabel>{props.label}</SectionLabel>
      <SectionInput
        value={props.displayModifier?props.displayModifier(props.formData[props.keyName]):props.formData[props.keyName]}
        onChange={onValueChange}
      ></SectionInput>
    </FormSectionContainer>
  );
}

export default FormSection;
