import React from "react";
import {
  InductionContainer,
  InductionHeadingContainer,
  InductionOptions,
  InductionOption
} from "./styles";
function Induction(props) {
  return (
    <InductionContainer>
      <InductionHeadingContainer>
        Welcome to <br />
        Contacts
      </InductionHeadingContainer>
      <InductionOptions>
        <InductionOption to="/first-timer">First Time User</InductionOption>
        <InductionOption to="/add-device">Add this device</InductionOption>
      </InductionOptions>
    </InductionContainer>
  );
}

export default Induction;
