import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ max, currentPage, incrementPage, decrementPage }) => (
  <section className={styles.controls}>
    {
      <button
        type="button"
        disabled={currentPage === 0}
        className={styles.button}
        onClick={decrementPage}
      >
        Назад
      </button>
    }
    {
      <button
        type="button"
        disabled={currentPage === max - 1}
        className={styles.button}
        onClick={incrementPage}
      >
        Вперед
      </button>
    }
  </section>
);

Controls.propTypes = {
  max: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  incrementPage: PropTypes.func.isRequired,
  decrementPage: PropTypes.func.isRequired,
};
export default Controls;
