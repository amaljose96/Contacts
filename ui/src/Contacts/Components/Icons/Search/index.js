import styled from 'styled-components';
import SearchImage from './Search.png';
const SearchIcon=styled.div`
    width: ${props=>props.width?props.width:"50"}px;
    height:${props=>props.height?props.height:"50"}px;
    background-image:url(${SearchImage});
    background-size:100%;
`;

export default SearchIcon;