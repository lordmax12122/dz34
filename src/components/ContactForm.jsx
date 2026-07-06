import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) return;

    dispatch(addContact({ name, phone: number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input type="text" name="name" id={nameId} required />

      <label htmlFor={numberId}>Number</label>
      <input type="tel" name="number" id={numberId} required />

      <button type="submit">Add contact</button>
    </form>
  );
};
