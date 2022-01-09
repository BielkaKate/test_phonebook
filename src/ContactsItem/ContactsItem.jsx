const ContactsItem = ({contact, handleDelete}) => {
return (
    <li key={contact.id}>
    {contact.name} {contact.number}
    <button type="button" onClick={() => handleDelete(contact.id)}>Delete</button>
  </li>
)
}
export default ContactsItem;