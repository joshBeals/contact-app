import React from "react";
import "../style/AddContact.css";

class AddContact extends React.Component {
    state = {
        name: "",
        email: ""
    }

    add = (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        const { addContactHandler, history } = this.props;
        if(name === "" || email === ""){
            alert("Fields cannot be left empty");
            return;
        }
        addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        history.push("/");
    }

    render(){
        return(
            <div className="container">
                <form>
                    <h2>Add Contact</h2>
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Name" className="form-control" value={this.state.name} onChange={e => this.setState({name: e.target.value})} />  
                    </div><br />
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />  
                    </div><br /> 
                    <div>
                    <button onClick={this.add} className="btn btn-primary">Add</button>
                    </div>
                                 
                </form>
            </div>
        );
    }
}

export default AddContact;