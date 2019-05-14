import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';
import styles from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = {
    pages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    currentPage: 0,
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
        <Publication title={title} text={text} />
        <Counter currentPage={currentPage} max={max} />
        <Controls
          max={max}
          currentPage={currentPage}
          incrementPage={this.handleIncrement}
          decrementPage={this.handleDecrement}
        />
      </div>
    );
  }
}
