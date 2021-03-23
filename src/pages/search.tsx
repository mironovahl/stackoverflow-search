import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resultLoad } from 'src/redux/actions';

export const SearchPage = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    dispatch(resultLoad(value));
  };

  return (
    <form className="search_form">
      <input
        className="search_form__input"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleChange}
      />

      <Link to={`/search?q=${value}`}>
        <button
          className="search_form__button"
          type="submit"
          onClick={handleClick}
        >
          Search
        </button>
      </Link>
    </form>
  );
};
