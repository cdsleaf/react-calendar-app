import React from 'react';
import PropType from 'prop-types';
import Date from './Date';

const Week = props => {

  const { monthIndex, week, weekIndex, toggleCategoryPopup } = props;

  return (
    <tr>   
      {week.map((weekDay, weekDayIndex) => (
        <Date key={weekDayIndex}
          monthIndex={monthIndex}
          weekIndex={weekIndex}
          weekDay={weekDay}
          weekDayIndex={weekDayIndex}
          toggleCategoryPopup={toggleCategoryPopup}
        />
      ))}    
    </tr>
  )
}

Week.propTypes = {
  week: PropType.array.isRequired,
};

export default Week;