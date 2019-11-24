import styled from "styled-components";
import { colors, device } from "../../../localStorage";

export const MenuContainer = styled.div`
  position: fixed;
  width: ${device === "Desktop" ? "400px" : "100vw"};
  height: 100%;
  top: 0px;
  left: ${props =>
    props.isOpen ? `0px` : device === "Desktop" ? "-400px" : "-100vw"};
  background-color: rgba(${colors.r}, ${colors.g}, ${colors.b},0.9);
  color: #fff;
  z-index: 5;
  transition: all 0.5s;
  display:flex;
  flex-direction:${device==="Desktop"?"column":"column-reverse"}
`;

export const MenuHeader=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:10px;
`;

export const MenuHeaderText=styled.div`
    margin-right:30px;
    font-size:18px;
`;

export const MenuBody=styled.div``;