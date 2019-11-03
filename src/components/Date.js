import React from 'react';
import PropType from 'prop-types';
import styled, { css } from 'styled-components';
import { CATEGORIES_COLORS } from '../constants';

const Td = styled.td`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ category, weekends, today }) => css`
    color: ${category || today 
      ? `white` 
      : weekends ? `#2196f3` : `inherit` };
    background-color: ${category !== '' 
      ? CATEGORIES_COLORS[category] 
      : today ? `blue` : `inherit`};    
  `}

  ${({ date }) => date && css`
    cursor: pointer;
    :hover {
      background-color: grey;
      color: white;
    }
  `};
`;

const Date = props => {
  
  const { 
    monthIndex,
    weekIndex, 
    weekDay, 
    weekDayIndex, 
    toggleCategoryPopup 
  } = props;

  return (
    <Td
      date={weekDay.date}
      weekends={weekDay.weekends}
      today={weekDay.today}
      category={weekDay.category}
      onClick={weekDay.date !== '' ? () => {
        toggleCategoryPopup({monthIndex, weekIndex, weekDayIndex}); 
      } : null} 
    > 
      {weekDay.date}
    </Td>      
  )
}

Date.propTypes = {
  weekDay: PropType.object.isRequired,
};

export default Date;