import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onDeposit: PropTypes.func.isRequired,
    onWithdraw: PropTypes.func.isRequired,
  };

  state = {
    numeric: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddDeposit = e => {
    e.preventDefault();
    this.props.onDeposit({ ...this.state });
    this.setState({ numeric: '' });
  };

  handleAddWithdraw = e => {
    e.preventDefault();
    this.props.onWithdraw({ ...this.state });
    this.setState({ numeric: '' });
  };

  render() {
    const { numeric } = this.state;
    return (
      <section className={styles.controls}>
        <input
          type="number"
          name="numeric"
          value={numeric}
          onChange={this.handleChange}
          placeholder="Enter numeric"
        />
        <button type="submit" onClick={this.handleAddDeposit}>
          Deposit
        </button>
        <button type="submit" onClick={this.handleAddWithdraw}>
          Withdraw
        </button>
      </section>
    );
  }
}
