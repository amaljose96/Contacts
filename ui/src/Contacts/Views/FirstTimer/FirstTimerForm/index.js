import React from "react";
import FormSection from "../../../Components/FormSection";
import formConfig from "./constants";
import {FirstTimerFormContainer} from './styles';
function FirstTimerForm(props) {
  return (
    <FirstTimerFormContainer>
      {formConfig.map(section => {
        return (
          <FormSection
            formData={props.formData}
            setFormData={props.setFormData}
            {...section}
          />
        );
      })}
    </FirstTimerFormContainer>
  );
}
export default FirstTimerForm;
