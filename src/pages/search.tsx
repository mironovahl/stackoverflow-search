import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const SearchPage = () => {
  const history = useHistory();
  const [value, setValue] = useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    history.push({ pathname: '/search', search: `q=${value}` });
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

      <button
        className="search_form__button"
        type="submit"
        onClick={handleClick}
      >
        Search
      </button>
    </form>
  );
};
