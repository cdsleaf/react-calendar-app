import React from 'react';
import PropType from 'prop-types';
import Date from './Date';

const Week = ({
  monthIndex,
  week,
  weekIndex,
  toggleCategoryPopup,
}) => (
  <tr>
    {week.map((weekDay, weekDayIndex) => (
      <Date
        monthIndex={monthIndex}
        weekIndex={weekIndex}
        weekDay={weekDay}
        weekDayIndex={weekDayIndex}
        toggleCategoryPopup={toggleCategoryPopup}
      />
    ))}
  </tr>
);

Week.propTypes = {
  monthIndex: PropType.number.isRequired,
  week: PropType.arrayOf.isRequired,
  weekIndex: PropType.number.isRequired,
  toggleCategoryPopup: PropType.func.isRequired,
};

export default Week;
