import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoading, selectError } from '../redux/selectors';
import { ContactForm } from './ContactForm';
import { SearchBox } from './SearchBox';
import { ContactList } from './ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactList />
    </div>
  );
};
