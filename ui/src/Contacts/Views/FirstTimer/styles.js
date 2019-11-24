import styled from 'styled-components';
import { colors } from '../../fakeStore';
import Clickable from '../../Components/Clickable';
export const FirstTimerContainer = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const FirstTimerHeading = styled.div`
    font-size:24px;
    padding:20px;
    color:rgb(${colors.r},${colors.g},${colors.b});
    margin-bottom:20px;
    width:100%;
    box-sizing:border-box;
`;
export const FirstTimerSubmitContainer=styled.div`
    display:flex;
    justify-content:flex-end;
    margin-top:100px;
    width:100%;
`;
export const FirstTimerSubmit = styled(Clickable)`
    width:400px;
    color:#fff;
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.8);
    height:75px;
    font-size:18px;
    display:flex;
    justify-content:center;
    align-items:center;
`;