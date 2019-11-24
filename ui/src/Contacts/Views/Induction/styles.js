import styled from "styled-components";
import { colors, device } from "../../localStorage";
import Clickable from "../../Components/Clickable";
export const InductionContainer = styled.div`
  display: flex;
  flex-direction: ${device === "Desktop" ? "row" : "column"};
  width: 100%;
  height: 100%;
`;
export const InductionHeadingContainer = styled.div`
  width: ${device === "Desktop" ? "50%" : "100%"};
  height: ${device === "Desktop" ? "100%" : "50%"};
  background-color: rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.9);
  color: #fff;
  font-size: 50px;
  padding: 50px;
  display: flex;
  align-items: center;
`;
export const InductionOptions = styled.div`
  width: ${device === "Desktop" ? "50%" : "100%"};
  height: ${device === "Desktop" ? "100%" : "50%"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const InductionOption = styled(Clickable)`
  width: 50%;
  background-color: rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.8);
  color: #fff;
  margin: 10px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;
