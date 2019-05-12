import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static defaultProps = {
    initialPage: 1,
  };

  static propTypes = {
    initialPage: PropTypes.number,
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    currentPage: this.props.initialPage,
  };

  handleIncrement = () => {
    this.setState(state => ({
      currentPage: state.currentPage + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      currentPage: state.currentPage - 1,
    }));
  };

  render() {
    const { pages } = this.props;
    const { currentPage } = this.state;
    const { title } = pages[currentPage];
    const { text } = pages[currentPage];
    const max = pages.length;

    return (
      <div className={styles.reader}>
        <section className={styles.publication}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
        <p className={styles.counter}>{currentPage + 1}/12</p>
        <section className={styles.controls}>
          {currentPage !== 0 && (
            <button
              type="button"
              className={styles.button}
              onClick={this.handleDecrement}
            >
              Назад
            </button>
          )}
          {currentPage < max - 1 && (
            <button
              type="button"
              className={styles.button}
              onClick={this.handleIncrement}
            >
              Вперед
            </button>
          )}
        </section>
      </div>
    );
  }
}
