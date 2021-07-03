import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import DeleteCard from "./components/DeleteCard";

function App() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    console.log(contact);
    setContacts([...contacts, {id: uuid(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter(contact => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(data){
      setContacts(data);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" 
            exact 
            render={(props) => (
              <ContactList {...props} contacts={contacts} deleteViaId={removeContactHandler} />
            )}
          />
          <Route 
            path="/add" 
            exact 
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route 
            path="/contact/:id" 
            exact 
            component={ContactDetail}
          />
          <Route 
            path="/delete/:id" 
            exact 
            render={(props) => (
              <DeleteCard {...props} deleteSure={removeContactHandler} />
            )}
          />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
