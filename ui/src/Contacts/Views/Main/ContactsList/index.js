import React from 'react';
import { ContactsListContainer } from './styles';
import ContactBlock from './ContactBlock';
const contacts=Array(1).fill([
    {name:"Amal Jose"},
    {name:"Ananth Kopparaju"},
    {name:"Rohit Koshy"},
    {name:"Pranay V Kalro"},
    {name:"Sakithya Gobinath"}
]).flat()
function ContactsList(props){
    return <ContactsListContainer>
        {
            contacts.map(contact=>{
                return <ContactBlock contact={contact}/>
            })
        }
    </ContactsListContainer>;
}

export default ContactsList;