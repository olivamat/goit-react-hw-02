import React from 'react';
import PropTypes from 'prop-types';
import styles from './publication.module.css';

const Publication = ({ title, text }) => (
  <section className={styles.publication}>
    <h2>{title}</h2>
    <p>{text}</p>
  </section>
);

Publication.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Publication;
