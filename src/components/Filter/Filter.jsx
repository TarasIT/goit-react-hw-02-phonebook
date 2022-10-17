import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  ContactsDeleteBtn,
  FilterContainer,
  FilterInput,
  FilterLabel,
} from './Filter.styled';

export class Filter extends Component {
  filterInputHandler = event => {
    this.props.inputHandler(event.target.value);
  };

  reset = () => {
    this.props.inputHandler('');
  };

  deleteContact = () => {
    const contacts = this.props.contacts;
    const lowerCaseQuery = this.props.filter.toLowerCase();

    if (lowerCaseQuery.length === 0) {
      return alert(`Please, choose a contact to delete!`);
    }

    contacts.forEach(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      if (lowerCaseName.includes(lowerCaseQuery)) {
        return alert(`${name} is successfully deleted from contacts!`);
      }
    });

    const newArrayWithoutDeletedContact = contacts.filter(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return (
        !lowerCaseName.includes(lowerCaseQuery) && lowerCaseQuery.length !== 0
      );
    });

    this.props.deleteContact(newArrayWithoutDeletedContact);
    this.reset();
  };

  render() {
    const { filter } = this.props;
    return (
      <FilterContainer>
        <FilterLabel>
          Find contact by name
          <FilterInput
            type="text"
            name="filter"
            value={filter}
            onChange={this.filterInputHandler}
            required
          />
        </FilterLabel>
        <ContactsDeleteBtn type="button" onClick={this.deleteContact}>
          Delete contact
        </ContactsDeleteBtn>
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};
