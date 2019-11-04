import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components';

const YearSelector = styled.button`
  margin: 1em;
  border: none;
  background: none;
  cursor: pointer;

  :hover {
    color: red;
  }
`;

const YearNavigation = props => {
  
  const { year, handleChangeYear } = props;

  return (
    <div>
      <YearSelector id="lastYear" onClick={handleChangeYear}>◀</YearSelector>
      <span>{year}</span>
      <YearSelector id="nextYear" onClick={handleChangeYear}>▶</YearSelector>
    </div>
  )
}

YearNavigation.propTypes = {
  year: PropType.number.isRequired,
  handleChangeYear: PropType.func.isRequired,
};

export default YearNavigation