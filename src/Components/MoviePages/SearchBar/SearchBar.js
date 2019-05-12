import React from 'react';
import PropTypes from 'prop-types';
import styles from './SerchBar.module.css';

const MovieFilter = ({ value, onChange }) => (
  <input
    type="text"
    className={styles.input}
    value={value}
    onChange={onChange}
    placeholder="Type to filter movies..."
  />
);

MovieFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default MovieFilter;
