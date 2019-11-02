import React from 'react'
import PropType from 'prop-types'
import styled from 'styled-components';

const YearSelector = styled.button`
  margin: 1em;
  border: none;
  background: none;
  cursor: pointer;
`;

const YearNavigation = props => {
  
  const { year, setYear } = props;

  return (
    <div>
      <YearSelector id="lastYear" onClick={() => setYear(year-1)}>◀</YearSelector>
      <span>{year}</span>
      <YearSelector id="nextYear" onClick={() => setYear(year+1)}>▶</YearSelector>
    </div>
  )
}

YearNavigation.propTypes = {
  year: PropType.number.isRequired,
  setYear: PropType.func.isRequired,
};

export default YearNavigation