import styled from 'styled-components';
import AddImage from './Add.png';
const AddIcon=styled.div`
    width: ${props=>props.width?props.width:"55"}px;
    height:${props=>props.height?props.height:"50"}px;
    background-image:url(${AddImage});
    background-size:100%;
`;

export default AddIcon;