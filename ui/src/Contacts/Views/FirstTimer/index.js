import React, { useState } from "react";
import { device } from "../../fakeStore";
import {
  FirstTimerContainer,
  FirstTimerHeading,
  FirstTimerSubmitContainer,
  FirstTimerSubmit,
} from "./styles";
import FirstTimerForm from "./FirstTimerForm";
import Container from "../../Components/Container";
function FirstTimer(props) {
  const [formData, setFormData] = useState({});

  function changeFormData(field, newValue) {
    let newFormData = {
      ...formData,
      [field]: newValue
    };
    setFormData(newFormData);
  }
  return (
    <FirstTimerContainer>
      {device === "Desktop" ? (
        <FirstTimerHeading>Contacts</FirstTimerHeading>
      ) : (
        <div />
      )}
      <Container>
        <FirstTimerForm formData={formData} setFormData={changeFormData} />
        <FirstTimerSubmitContainer>
        <FirstTimerSubmit>Continue</FirstTimerSubmit></FirstTimerSubmitContainer>
      </Container>
    </FirstTimerContainer>
  );
}

export default FirstTimer;
