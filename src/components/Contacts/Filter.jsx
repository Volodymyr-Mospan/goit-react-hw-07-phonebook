import React from 'react';
import { FilterLabel, FilterInput } from 'components/Contacts/';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </FilterLabel>
  );
};
