import React from 'react';
import Container from '../../Components/Container';
import { device } from '../../theme';
import {MainContainer} from './styles';
import Menu from './Menu';
import Header from './Header';
import ContactsList from './ContactsList';
import MobileQuickAccess from './MobileQuickAccess';
function Main(props){
    return <MainContainer>
        <Menu/>
        <Header/>
        <Container>
            <ContactsList/>
        </Container>
        {
            device!=="Desktop"?<MobileQuickAccess/>:<div/>
        }
    </MainContainer>;
}

export default Main;