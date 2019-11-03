import React from 'react';
import PropType from 'prop-types';
import Date from './Date';

const Week = props => {

  const { week } = props;

  return (
    <tr>   
      {week.map((weekDay, weekDayIndex) => (
        <Date key={weekDayIndex}
          weekDay={weekDay}
          weekDayIndex={weekDayIndex}
        />
      ))}    
    </tr>
  )
}

Week.propTypes = {
  week: PropType.array.isRequired,
};

export default Week;