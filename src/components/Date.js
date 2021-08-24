import React from 'react';
import PropType from 'prop-types';
import styled, { css } from 'styled-components';
import { CATEGORIES_COLORS } from '../constants';

const Td = styled.td`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ category, weekends, today }) => css`
    color: ${category || (today && 'white') || weekends ? '#2196f3' : 'inherit'};
    background-color: ${(category && CATEGORIES_COLORS[category]) || (today ? 'blue' : 'inherit')};    
  `}

  ${({ date }) => date && css`
    cursor: pointer;
    :hover {
      background-color: grey;
      color: white;
    }
  `};
`;

const Date = ({
  monthIndex,
  weekIndex,
  weekDay,
  weekDayIndex,
  toggleCategoryPopup,
}) => (
  <Td
    date={weekDay.date}
    weekends={weekDay.weekends}
    today={weekDay.today}
    category={weekDay.category}
    onClick={weekDay.date !== ''
      ? () => toggleCategoryPopup({ monthIndex, weekIndex, weekDayIndex })
      : null}
  >
    {weekDay.date}
  </Td>
);

Date.propTypes = {
  monthIndex: PropType.number.isRequired,
  weekIndex: PropType.number.isRequired,
  weekDay: PropType.shape({
    date: PropType.number,
    weekends: PropType.number,
    today: PropType.number,
    category: PropType.string,
  }).isRequired,
  weekDayIndex: PropType.number.isRequired,
  toggleCategoryPopup: PropType.func.isRequired,
};

export default Date;
