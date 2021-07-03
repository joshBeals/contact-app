import React from "react";
import { Link } from "react-router-dom";
import "../style/ContactList.css";

const DeleteContact = (props) => {
    const { id, name, email } = props.location.state.contact;
    return(
        <div className="container">
            <h3>Are you sure you want to delete this item?</h3>
            <div>
                <button className="btn btn-sm btn-primary mr-5" onClick={() => {props.deleteSure(id); props.history.push("/");}}>Yes</button>
                <Link to="/" style={{ textDecoration: 'none', marginLeft: '10px' }}>
                    <button className="btn btn-sm btn-danger">No</button>
                </Link>
            </div>
        </div>
    ); 
}

export default DeleteContact;