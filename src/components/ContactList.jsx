import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
