import styled from 'styled-components';
import { colors } from '../theme';

const Input=styled.input`
    webkit-appearance:none;
    appearance:none;
    border:none;
    outline:none;
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.1);
    padding:10px;
`;
export default Input;