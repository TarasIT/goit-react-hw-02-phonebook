import PropTypes from 'prop-types';
import { Component } from 'react';
import { FilterContainer, FilterInput, FilterLabel } from './Filter.styled';

export class Filter extends Component {
  filterInputHandler = event => {
    this.props.inputHandler(event.target.value);
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
      </FilterContainer>
    );
  }
}

Filter.propTypes = {
  inputHandler: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string.isRequired,
};
