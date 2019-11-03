import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';
import { CATEGORIES } from '../constants';

const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const PopupInner = styled.div`
  position: absolute;
  left: 30%;
  top: 30%;
  margin: auto;
  background: white;
`;

const CategoryPopup = props => {

  const { selectedDay, handleChangeCategory, toggleCategoryPopup } = props;
  const category = selectedDay.category || '';
  const categoryOptions = [
    {value: 'select', label: 'select to...', disabled: 'disabled'},
    ...CATEGORIES,
    {value: '', label: 'None'},
  ]

  return (
    <Popup onClick={() => toggleCategoryPopup(null)}>
      <PopupInner>
        <select value={category} onChange={handleChangeCategory} size={categoryOptions.length}>
          {categoryOptions.map(e => (
            <option key={e.value} value={e.value} disabled={e.disabled} >{e.label}</option>
          ))}
        </select>
      </PopupInner>
    </Popup>
  )
}

CategoryPopup.propTypes = {
  selectedDay: PropType.object.isRequired,
  handleChangeCategory: PropType.func.isRequired,
  toggleCategoryPopup: PropType.func.isRequired,
};

export default CategoryPopup