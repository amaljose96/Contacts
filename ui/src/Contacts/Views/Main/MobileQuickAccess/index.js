import React from 'react';
import MenuIcon from '../../../Components/Icons/Menu';
import SearchIcon from '../../../Components/Icons/Search';
import AddIcon from '../../../Components/Icons/Add';
import {QuickAccessContainer} from './styles';
function MobileQuickAccess(props){
    return <QuickAccessContainer>
        <MenuIcon/>
        <SearchIcon/>
        <AddIcon/>
    </QuickAccessContainer>;
}

export default MobileQuickAccess;