import React from 'react';
import styled from 'styled-components';
import { CATEGORIES, CATEGORIES_COLORS } from '../constants';

const Layout = styled.div`
  float: left;
  margin-top: 3rem;

  ul {
    padding: 0;
    li {
      list-style: none;
    }
  }
`;

const Category = styled.div`
  span {
    margin-bottom: 0.5rem;
    padding-right: 1rem;
    float: left;
    width: 5rem;
  }
  div {
    float: left;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${({ color }) => color};
  }
`;

const Legend = () => (
  <Layout>
    <h3>Legend</h3>
    <ul>
      {CATEGORIES.map((e) => (
        <li key={e.label}>
          <Category color={CATEGORIES_COLORS[e.value]}>
            <span>{e.label}</span>
            <div />
          </Category>
        </li>
      ))}
    </ul>
  </Layout>
);

export default Legend;
