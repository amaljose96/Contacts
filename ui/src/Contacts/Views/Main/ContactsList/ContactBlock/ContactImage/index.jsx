import React from 'react';
import {ContactImg,ReplacementImage} from './styles';

function getReplacementImageText(name){
    return name.split(" ").slice(0,2).map((name)=>name[0]).join("");
}

function ContactImage({contact}){
    if(contact.imageDetail){
        return <ContactImg url={contact.imageDetail.url}/>
    }
    else{
        return <ReplacementImage>{getReplacementImageText(contact.name)}</ReplacementImage>
    }
}

export default ContactImage;