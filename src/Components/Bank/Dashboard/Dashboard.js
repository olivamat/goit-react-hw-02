import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import MovieGrid from '../MovieGrid/MovieGrid';
// import styles from './MoviePage.module.css';
// import MovieFilter from '../SearchBar/SearchBar';
import shortid from 'shortid';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import Controls from '../Controls/Controls';

export default class Dachboard extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    history: this.props.history,
    balance: this.props.balance,
  };

  handleControlsAddDeposit = num => {
    const userNumeric = parseInt(num.numeric, 10);
    const date = new Date();
    const dateToString = date.toLocaleString();
    const addHistoty = {
      id: shortid.generate(),
      type: 'deposit',
      amount: userNumeric,
      date: dateToString,
    };
    if (userNumeric === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(num.numeric, 10),
        history: [...prevState.history, addHistoty],
      }));
    }
  };

  handleControlsAddWithdraw = num => {
    const currentBalance = this.state.balance;
    const userNumeric = parseInt(num.numeric, 10);
    const date = new Date();
    const dateToString = date.toLocaleString();
    const addHistoty = {
      id: shortid.generate(),
      type: 'withdraw',
      amount: userNumeric,
      date: dateToString,
    };
    if (userNumeric > currentBalance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (userNumeric === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - userNumeric,
        history: [...prevState.history, addHistoty],
      }));
    }
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div>
        <Controls
          onControlsDeposit={this.handleControlsAddDeposit}
          onControlsWithdraw={this.handleControlsAddWithdraw}
        />
        <Balance
          onCoDeCu={this.handledepositCurrent}
          transactions={history}
          balance={balance}
        />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
