import styled from "styled-components";
import { device } from "../../../theme";
export const ContactsListContainer = styled.div`
  display: ${device === "Desktop" ? "flex" : "block"};
  flex-wrap: wrap;
  margin-top: ${device === "Desktop" ? "80px" : "calc(50vh + 20px)"};
`;
