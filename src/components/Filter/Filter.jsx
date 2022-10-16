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

    const contactToDelete = contacts.find(({ name }) => {
      const lowerCaseName = name.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
    const contactIndex = contacts.indexOf(contactToDelete);

    if (contacts.includes(contactToDelete) && lowerCaseQuery.length !== 0) {
      contacts.splice(contactIndex, 1);
      alert(`${contactToDelete.name} is successfully deleted from contacts!`);
      this.reset();
    } else {
      alert('Please, choose a contact to delete!');
    }
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
