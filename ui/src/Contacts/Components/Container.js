import styled from "styled-components";
import { device } from "../localStorage";

const Container = styled.div`
  width: ${device === "Desktop"
    ? parseInt(window.screen.width / 400 - 1) * 400 + "px"
    : "100%"};
    ${device === "Desktop"
    ? ""
    : "padding:5px;"}
    box-sizing:border-box;
`;

export default Container;
