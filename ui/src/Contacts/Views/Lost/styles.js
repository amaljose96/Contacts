import styled from 'styled-components';
import { colors } from '../../localStorage';


export const LostContainer=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    height:100%;
`;
export const LostHeading=styled.div`
    font-size:48px;
    margin-bottom:10px;
    font-weight:bold;
    color:rgb(${colors.r},${colors.g},${colors.b});
    text-align:center;
`;
export const LostDialogue=styled.div`
    font-size:24px;
    text-align:center;
    margin-bottom:30px;
    padding:0px 20px;
`;
export const LostEmoji=styled.div`
font-size:48px;`;