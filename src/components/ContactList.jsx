import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "../style/ContactList.css";

const ContactList = (props) => {

    const { contacts, deleteViaId } = props;

    const deleteContactHandler = (id) => {
        deleteViaId(id);
    }
    
    const renderContactList = contacts.map(contact => {
        const { id } = contact;
        return(
            <div>
                <ContactCard contact={contact} clickHandler={deleteContactHandler} key={id} />
            </div>
        ); 
    });
    return (
        <div>
            <div className="container">
                <div className="contactHeader">
                    <h3>Contact List</h3>
                    <div className="addContact">
                        <Link to="/add">
                            <button className="btn btn-primary btn-sm">Add Contact</button>
                        </Link>
                    </div>
                </div>
            </div>
            {renderContactList}
        </div>
    );
}

export default ContactList;