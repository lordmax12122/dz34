import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { selectIsLoading } from '../../redux/selectors';

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <li>
      <span>{name}: {phone}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};
