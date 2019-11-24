import styled from 'styled-components';
import { colors, device } from '../../../../theme';
import Clickable from '../../../../Components/Clickable';

export const ContactBlockContainer =styled.div`
    width:${device==="Desktop"?"380px":"calc(100% - 20px)"};;
    margin:10px;
    height:75px;
    display:flex;
`;
export const ContactDetail =styled.div`
    width:calc(100% - 75px);
    padding:5px;
    box-sizing:border-box;
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.1);
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    box-sizing:border-box;
`;
export const ContactName =styled.div`
    font-size:20px;
    margin-left:10px;
    box-sizing:border-box;
`;
export const ContactOptions =styled.div`
    color:rgb(${colors.r},${colors.g},${colors.b});
    box-sizing:border-box;
    display:flex;
    flex-direction:row-reverse;
`;
export const ContactOption =styled(Clickable)`
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.1);
    padding:5px;
    box-sizing:border-box;
    margin:0px 5px;
`;