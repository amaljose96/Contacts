import React from 'react';
import {LostContainer, LostHeading, LostDialogue,LostEmoji} from './styles';
function Lost(props){
    return <LostContainer>
        <LostHeading>Hey There!</LostHeading>
        <LostDialogue>The app seems to have gone somewhere it should'nt have. </LostDialogue>
        <LostEmoji>🤔</LostEmoji>
    </LostContainer>
}

export default Lost;