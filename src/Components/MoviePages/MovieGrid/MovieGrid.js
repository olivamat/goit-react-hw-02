import React from 'react';
import PropTypes from 'prop-types';
import MovieGridItem from '../MovieGridItem/MovieGridItem';
import styles from './MovieGried.module.css';

const MovieGrid = ({ movies }) =>
  movies.length === 0 ? (
    <p>No matching results!</p>
  ) : (
    <div>
      <ul className={styles.movieGrid}>
        {movies.map(movie => (
          <li key={movie.id} className={styles.movieCard}>
            <MovieGridItem {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );

MovieGrid.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      posterUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
