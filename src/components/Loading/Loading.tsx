import React from 'react';
import classes from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={classes.loading} data-testid="loading">
      <svg
        className={classes.spinner}
        width="65px"
        height="65px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={classes.path}
          fill="none"
          strokeWidth="6"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="30"
        ></circle>
      </svg>
    </div>
  );
}
