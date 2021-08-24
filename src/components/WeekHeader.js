import React from 'react';
import styled from 'styled-components';
import { WEEKS } from '../constants';

const Tr = styled.tr`
  background-color: #b5c0ca;
  color: #787f85;
  width: 2rem;
`;

const WeekHeader = () => (
  <thead>
    <Tr>
      {WEEKS.map((week) => (
        <th key={week}>
          {week}
        </th>
      ))}
    </Tr>
  </thead>
);

export default WeekHeader;
