import React from "react";
import { Link } from "react-router-dom";
import "../style/ContactList.css";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    const deleteContact = (id) => {
        props.clickHandler(id);
    }
    return(
        <div className="item">
            <div className="user">
                <i className="fas fa-user-circle text-primary"></i>
            </div>
            <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}} style={{ textDecoration: 'none' }}>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="email">{email}</div>
                </div>
            </Link>
            <div className="icons">
                {/* <i className="far fa-edit text-primary"></i> */}
                <Link to={{pathname:`/delete/${id}`, state:{contact:props.contact}}} style={{ textDecoration: 'none' }}>
                    <i className="far fa-trash-alt text-danger"></i>
                </Link>
                
            </div>
        </div>
    ); 
}

export default ContactCard;