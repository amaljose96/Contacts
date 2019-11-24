import styled from "styled-components";
import { colors, device } from "../../../theme";

export const HeaderContainer = styled.div`
  height: ${device === "Desktop" ? "60px" : "40vh"};
  background-color: rgba(${colors.r}, ${colors.g}, ${colors.b}, 0.6);
  color: #fff;
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${device === "Desktop" ? "fixed" : "absolute"};
  left: 10px;
  margin-top: 10px;
`;
export const HeaderLeft = styled.div``;
export const HeaderCenter = styled.div`
  font-size: 32px;
`;
export const HeaderRight = styled.div`
  display: flex;
`;
