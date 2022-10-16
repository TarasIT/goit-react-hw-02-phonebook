import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contacts, filter, children }) => {
  return (
    <ul>
      {children}
      <ContactItem contacts={contacts} filter={filter} />
    </ul>
  );
};
