import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieGrid from '../MovieGrid/MovieGrid';
import styles from './MoviePage.module.css';
import MovieFilter from '../SearchBar/SearchBar';

const filterMovies = (movies, filter) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  static propTypes = {
    movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        posterUrl: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    movies: this.props.movies,
    filter: '',
  };

  change = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { movies, filter } = this.state;
    const filteredMovies = filterMovies(movies, filter);

    return (
      <div className={styles.container}>
        <MovieFilter value={filter} onChange={this.change} />
        <MovieGrid movies={filteredMovies} />
      </div>
    );
  }
}
