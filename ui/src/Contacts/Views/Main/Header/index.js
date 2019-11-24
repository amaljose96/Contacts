import React from "react";
import { device } from "../../../localStorage";
import { HeaderContainer, HeaderLeft, HeaderCenter, HeaderRight } from "./styles";
import MenuIcon from '../../../Components/Icons/Menu';
import SearchIcon from '../../../Components/Icons/Search';
import AddIcon from '../../../Components/Icons/Add';
function Header(props) {
  return (
    <HeaderContainer>
      {device !== "Desktop" ? (
        <div />
      ) : (
        <HeaderLeft>
          <MenuIcon onClick={props.openMenu}/>
        </HeaderLeft>
      )}

      <HeaderCenter>Contacts</HeaderCenter>

      {device !== "Desktop" ? (
        <div />
      ) : (
        <HeaderRight>
          <SearchIcon />
          <AddIcon />
        </HeaderRight>
      )}
    </HeaderContainer>
  );
}

export default Header;
