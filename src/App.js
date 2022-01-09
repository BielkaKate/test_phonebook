// import react from "react";
import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "./form/form.jsx";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter.jsx";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleSubmit = (data) => {
    const { name, number } = data;

    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    {
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase === name.toLowerCase
      ) && alert("Такой контакт уже есть");
    }
    {
      name &&
        number &&
        this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Form propOnSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <label>
          Filter by name
          <br />
          <Filter value={this.state.filter} onChange={this.handleFilter} />
        </label>

        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            handleDelete={this.handleDeleteContact}
          />
        )}
      </>
    );
  }
}

export default App;
