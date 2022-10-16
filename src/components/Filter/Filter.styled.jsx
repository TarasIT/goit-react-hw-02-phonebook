import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const FilterLabel = styled.label`
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
`;

export const FilterInput = styled.input`
  min-width: 300px;
  height: 30px;
  border-radius: 5px;
  margin-left: 20px;
  font-size: 18px;
`;

export const ContactsDeleteBtn = styled.button`
  min-width: 150px;
  height: 40px;
  border-radius: 5px;
  font-size: 18px;
  background-color: #e2e2e2;

  :hover,
  :focus {
    background-color: #c4c4c4;
  }
`;
