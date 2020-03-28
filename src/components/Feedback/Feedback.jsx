import React from 'react';
import PropTypes from 'prop-types';
import style from './Feedback.module.css';

const Feedback = ({ handleButton }) => {
  return (
    <>
      <h2>Please leave feedback</h2>
      <div className={style.buttonsWrapper}>
        <button
          className="good"
          name="good"
          type="button"
          onClick={handleButton}
        >
          Good
        </button>
        <button
          className="neutral-btn"
          name="neutral"
          type="button"
          onClick={handleButton}
        >
          Neutral
        </button>
        <button
          className="bad-btn"
          name="bad"
          type="button"
          onClick={handleButton}
        >
          Bad
        </button>
      </div>
    </>
  );
};

Feedback.propTypes = {
  handleButton: PropTypes.func.isRequired,
};

export default Feedback;
