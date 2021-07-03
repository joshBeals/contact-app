import React from "react";
import { Link } from "react-router-dom";
import "../style/ContactList.css";

const ContactDetail = (props) => {
    const { id, name, email } = props.location.state.contact;
    return(
        <div className="detail">
            <div className="card" style={{ width: '18rem' }}>
                <div className="img bg-secondary">
                    <i className="fas fa-user-circle text-light" style={{ fontSize: '50px' }}></i>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                    <Link to="/">
                        <div className="btn btn-primary">Back to Contact List</div>
                    </Link>
                </div>
            </div>
        </div>
    ); 
}

export default ContactDetail;