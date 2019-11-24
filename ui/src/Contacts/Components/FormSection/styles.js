import styled from 'styled-components';
import Input from '../Input';


export const FormSectionContainer =styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:15px;
`
export const SectionLabel =styled.div`
    font-size:14px;
    margin-bottom:15px;
`
export const SectionInput  =styled(Input)`
    width:400px;
    font-size:18px;
`