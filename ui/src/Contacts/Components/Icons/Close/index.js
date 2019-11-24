import styled from 'styled-components';
import CloseImage from './Close.png';
const CloseIcon=styled.div`
    width: ${props=>props.width?props.width:"55"}px;
    height:${props=>props.height?props.height:"50"}px;
    background-image:url(${CloseImage});
    background-size:100%;
`;

export default CloseIcon;