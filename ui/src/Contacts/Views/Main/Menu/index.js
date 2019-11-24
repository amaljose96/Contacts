import React from "react";
import { MenuContainer, MenuHeader, MenuHeaderText, MenuBody } from "./styles";
import CloseIcon from "../../../Components/Icons/Close";

function Menu(props) {
  return (
    <MenuContainer isOpen={props.isOpen}>
      <MenuHeader>
        <CloseIcon onClick={props.closeMenu} />
        <MenuHeaderText>Main Menu</MenuHeaderText>
      </MenuHeader>
      <MenuBody></MenuBody>
    </MenuContainer>
  );
}

export default Menu;
