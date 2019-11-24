import React,{useState} from 'react';
import Container from '../../Components/Container';
import { device } from '../../localStorage';
import {MainContainer} from './styles';
import Menu from './Menu';
import Header from './Header';
import ContactsList from './ContactsList';
import MobileQuickAccess from './MobileQuickAccess';
function Main(props){
    const [menuOpen, setMenuOpen] = useState(true);
    return <MainContainer>
        <Menu isOpen={menuOpen} closeMenu={()=>{setMenuOpen(false)}}/>
        <Header openMenu={()=>{setMenuOpen(true)}}/>
        <Container>
            <ContactsList/>
        </Container>
        {
            device!=="Desktop"?<MobileQuickAccess openMenu={()=>{setMenuOpen(true)}}/>:<div/>
        }
    </MainContainer>;
}

export default Main;