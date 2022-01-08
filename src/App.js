// import react from "react";
import "./App.css";
import { Component } from "react";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };
    {
      name &&
        number &&
        this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
    }

    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    console.log(visibleContacts);
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name <br />
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            ></input>
            <br />
          </label>
          <label>
            Number
            <br />
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            ></input>
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Filter by name
          <br />
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          ></input>
        </label>

        {visibleContacts.length > 0 && (
          <ul>
            {visibleContacts.map((contact) => {
              return (
                <li key={contact.id}>
                  {contact.name} {contact.number}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}

export default App;
