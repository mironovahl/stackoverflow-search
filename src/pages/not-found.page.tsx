import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="not-found">
      <div className="wrapper">
        <div className="not-found_content">
          <div className="not-found_content__text">
            <h1>404</h1>
            <h3>Page not found</h3>
          </div>
          <Link to="/">
            <button className="btn not-found_content__button" type="button">
              GO HOME
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
