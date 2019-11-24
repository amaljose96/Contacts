import React from "react";
import { FormSectionContainer, SectionLabel, SectionInput } from "./styles";
function FormSection(props) {
  function onValueChange(e) {
    let newValue = e.target.value;
    props.setFormData(props.keyName, newValue);
  }
  return (
    <FormSectionContainer>
      <SectionLabel>{props.label}</SectionLabel>
      <SectionInput
        value={props.formData[props.keyName]}
        onChange={onValueChange}
      ></SectionInput>
    </FormSectionContainer>
  );
}

export default FormSection;
