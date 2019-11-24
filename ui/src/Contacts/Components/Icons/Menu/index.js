import styled from "styled-components";
import MenuImage from "./Menu.png";
const MenuIcon = styled.div`
  width: ${props => (props.width ? props.width : "50")}px;
  height: ${props => (props.height ? props.height : "50")}px;
  background-image: url(${MenuImage});
  background-size:100%;
`;

export default MenuIcon;
