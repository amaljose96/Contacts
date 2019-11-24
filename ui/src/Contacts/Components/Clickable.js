import styled from 'styled-components';
import { Link } from "react-router-dom";
const Clickable=styled(Link)`
    :hover{
        opacity:0.8;
        cursor:pointer;
    }
    text-decoration:none;
    transition:all 1s;
    :active{
        color:inherit
    }
`;
export default Clickable