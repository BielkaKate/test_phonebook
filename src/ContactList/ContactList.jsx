import ContactsItem from "../ContactsItem/ContactsItem"


const ContactList = ({contacts, handleDelete}) => {
return(
        <ul>
    {contacts.map((contact) => {
      return (
       <ContactsItem contact={contact} handleDelete = {handleDelete}/>
      );
    })}
  </ul>
)
}

export default ContactList;