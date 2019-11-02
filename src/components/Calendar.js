import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components';
import { MONTHS } from '../constants';
import { 
  calculateEndDatesOfMonths, 
  createDays,
 } from '../util/calenderUtil';
 import YearNavigation from './YearNavigation';

const Layout = styled.div`
  margin: 1rem;
`;

const Year = styled.div`
  margin-bottom: 1rem;
  text-align: center;
`;

const Monthes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const Calendar = props => {
  const [calenders, setCalenders] = useState([]);
  const [year, setYear] = useState(new Date().getFullYear());

  const createCalenders = year => {
    return MONTHS.reduce( (acc, month, index) => {
      return [ ...acc, {
        monthName: month,
        days: createDays(year, index, calculateEndDatesOfMonths(year)[index]) 
      } ];
    }, [])
  }

  useEffect(() => {
    setCalenders(createCalenders(year));
  }, [year]);

  return (
    <Layout>
      <Year>
        <YearNavigation year={year} setYear={setYear} />
      </Year>
      <Monthes>
        {calenders.map((month, monthIndex) => (
          <div key={monthIndex}>{month.monthName} {monthIndex}</div>
        ))}
      </Monthes>{console.log(calenders)}
    </Layout>
  )
}

export default Calendar;