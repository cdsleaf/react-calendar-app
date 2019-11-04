import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components';
import { MONTHS, SESSION_STORAGE_CALENDARS } from '../constants';
import { 
  calculateEndDatesOfMonths, 
  createDays,
 } from '../util/calenderUtil';
 import YearNavigation from './YearNavigation';
 import Month from './Month';
 import CategoryPopup from './CategoryPopup';

const Layout = styled.div`
  margin: 3rem;
  max-width: 46rem;
  float: left;
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
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [selectedDay, setSelectedDay] = useState(
    {
      category: null,
      monthIndex: 0,
      weekIndex: 0,
      weekDayIndex: 0,
    }
  );

  const createCalenders = year => {
    const savedCalender = JSON.parse(sessionStorage.getItem(SESSION_STORAGE_CALENDARS));
    if(savedCalender && savedCalender.hasOwnProperty(year)) return savedCalender[year];

    return MONTHS.reduce( (acc, month, index) => {
      return [ ...acc, {
        monthName: month,
        days: createDays(year, index, calculateEndDatesOfMonths(year)[index]) 
      } ];
    }, [])
  }

  const toggleCategoryPopup = indexs => {

    setShowCategoryPopup(!showCategoryPopup);

    if(indexs === null) return;

    const {monthIndex, weekIndex, weekDayIndex} = indexs;

    setSelectedDay({
      ...selectedDay,
      ...indexs,
      category: calenders[monthIndex].days[weekIndex][weekDayIndex].category,
    });
  }

  const handleChangeCategory = ({target: {value}}) => {
    const { monthIndex, weekIndex, weekDayIndex } = selectedDay;

    let newCalenders = JSON.parse(JSON.stringify(calenders));
    newCalenders[monthIndex].days[weekIndex][weekDayIndex].category = value;

    setCalenders(newCalenders);
    setShowCategoryPopup(!showCategoryPopup);
  }

  const handleChangeYear = ({target: {id}}) => {
    
    const savedCalender = sessionStorage.getItem(SESSION_STORAGE_CALENDARS);

    const newCalendars = savedCalender ? {
      ...JSON.parse(savedCalender),
      [year]: calenders,
    } : { [year]: calenders, };

    sessionStorage.setItem(SESSION_STORAGE_CALENDARS, JSON.stringify(newCalendars));

    if(id === 'lastYear'){
      setYear(year-1)
    }else if(id === 'nextYear'){
      setYear(year+1)
    }
  }

  useEffect(() => {
    setCalenders(createCalenders(year));
  }, [year]);

  return (
    <Layout>
      <Year>
        <YearNavigation year={year} handleChangeYear={handleChangeYear} />
      </Year>
      <Monthes>
        {calenders.map((month, monthIndex) => (
          <Month 
            key={month.monthName}
            monthName={month.monthName} 
            monthIndex={monthIndex} 
            days={month.days}
            toggleCategoryPopup={toggleCategoryPopup}
          />
        ))}
      </Monthes>
      {showCategoryPopup ? 
        <CategoryPopup
          selectedDay={selectedDay}
          handleChangeCategory={handleChangeCategory}
          toggleCategoryPopup={toggleCategoryPopup}
        />
        : null
      }
    </Layout>
  )
}

export default Calendar;