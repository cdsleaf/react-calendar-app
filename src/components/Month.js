import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import WeekHeader from './WeekHeader';
import Week from './Week';

const TitleMonth = styled.p`
  margin: auto;
  text-align: center;
  font-weight: bold;
  color: #2196f3;
`;

const Table = styled.table`
  border-collapse: collapse;
  text-align: center;
`;

const Month = props => {

  const { monthIndex, monthName, days, toggleCategoryPopup } = props;

  return (
    <div>
      <TitleMonth>{monthName}</TitleMonth>
      <Table>
        <WeekHeader />
        <tbody>
          {days.map((week, weekIndex) => (
          <Week key={weekIndex}
            monthIndex={monthIndex}
            week={week}
            weekIndex={weekIndex}
            toggleCategoryPopup={toggleCategoryPopup}
          />
          ))}   
        </tbody>
      </Table>
    </div>
  )
}

Month.propTypes = {
  monthName: PropType.string.isRequired,
  days: PropType.array.isRequired,
};

export default Month;