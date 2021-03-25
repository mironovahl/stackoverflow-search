import React, { ReactElement } from 'react';

export const Spinner = (): ReactElement => {
  return (
    <div className="spinner_wrapper">
      <div className="spinner">
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
        <span className="spinner_circle" />
      </div>
    </div>
  );
};
