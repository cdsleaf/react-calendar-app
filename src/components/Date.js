import React from 'react';
import PropType from 'prop-types';
import styled, { css } from 'styled-components';

const Td = styled.td`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${({ weekends, today }) => css`
    color: ${today ? `white` : weekends ? `#2196f3` : `inherit` };
    background-color: ${today ? `blue` : `inherit`};    
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
  
  const { weekDay } = props;

  return (
    <Td
      date={weekDay.date}
      weekends={weekDay.weekends}
      today={weekDay.today}
    > 
      {weekDay.date}
    </Td>      
  )
}

Date.propTypes = {
  weekDay: PropType.object.isRequired,
};

export default Date;