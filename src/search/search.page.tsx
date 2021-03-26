import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import t from 'src/image/stackoverflow.png';

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
    <div className="search">
      <div className="wrapper">
        <img className="search_logo" src={t} alt="" />
        <form className="search_form">
          <input
            className="search_form__input"
            type="text"
            placeholder="Search..."
            value={value}
            onChange={handleChange}
          />

          <button
            className="btn search_form__button"
            type="submit"
            onClick={handleClick}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
