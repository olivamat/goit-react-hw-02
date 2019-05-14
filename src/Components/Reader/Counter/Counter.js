import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPage, max }) => (
  <p className={styles.counter}>
    {currentPage + 1}/{max}
  </p>
);

Counter.propTypes = {
  currentPage: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
export default Counter;
