import { 
  calculateEndDatesOfMonths,
  createDays,
} from './calenderUtil';

describe('calculateEndDatesOfMonths ', () => {

  it('If it is a leap year ', () => {
    expect(calculateEndDatesOfMonths(2020)[1]).toBe(29);
  });  

  it('If it is not a leap year ', () => {
    expect(calculateEndDatesOfMonths(2019)[1]).toBe(28);
  });
});

describe('createDays ', () => {

  it('If create days of November 2019 ', () => {
    const november2019 = createDays(2019,10,30);

    expect(november2019[0][5].date).toBe(1);
    expect(november2019[4][6].date).toBe(30);
  });
});