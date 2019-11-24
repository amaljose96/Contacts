import styled from 'styled-components';
import { colors } from '../../../localStorage';

export const QuickAccessContainer=styled.div`
    position:fixed;
    display:flex;
    height:50px;
    bottom:0px;
    width:100%;
    justify-content:space-between;
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.7);
`;