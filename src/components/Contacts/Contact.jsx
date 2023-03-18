import PropTypes from 'prop-types';
import { ContactBtn } from 'components/Contacts/';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    // dispatch(deleteContact(contact.id))
  };

  return (
    <>
      {`${contact.name}: ${contact.phone}`}
      <ContactBtn type="button" onClick={handleDelete}>
        Delete
      </ContactBtn>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
