import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsAction } from 'redux/contactsSlice';
import { getContacts } from 'redux/contactsSelector';
import { FcTwoSmartphones } from 'react-icons/fc';

export const App = ()=>{
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = ({ number, name }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContactsAction(contact));
  };

  return (
    <div className={s.containerForm}>
        <h1 className={s.title}>Phone
          <span className={s.partTitle}>book</span>
          <FcTwoSmartphones /></h1>
        <ContactForm  handleSubmit={handleSubmit} contacts={contacts}/>
        <h2 className={s.title}>Contacts</h2>
          <Filter  />
          <ContactList />
      </div>
  )
}
