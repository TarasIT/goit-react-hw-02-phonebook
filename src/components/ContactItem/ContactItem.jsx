import PropTypes from 'prop-types';
import { Contact, Item } from './ContactItem.styled';

export const ContactItem = ({ contacts, filter }) => {
  return contacts.map(contact => {
    const { name, id, number } = contact;
    const lowerCaseName = name.toLowerCase();
    const lowerCaseQuery = filter.toLowerCase();

    return (
      lowerCaseName.includes(lowerCaseQuery) && (
        <Item key={id}>
          <Contact>
            {name}: {number}
          </Contact>
        </Item>
      )
    );
  });
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};
