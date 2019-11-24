import styled from 'styled-components';
import {colors} from '../../../../../theme';
export const ContactImg=styled.div`
    width:75px;
    height:75px;
    background-image:url(${props=>props.url});
`;

export const ReplacementImage=styled.div`
    width:75px;
    height:75px;
    background-color:rgba(${colors.r},${colors.g},${colors.b},0.75);
    color:#fff;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:24px;
`;