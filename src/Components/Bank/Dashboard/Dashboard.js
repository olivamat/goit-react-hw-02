import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  addHistotyItem = (type, num) => {
    const userNumeric = parseInt(num.numeric, 10);
    const dateToString = new Date().toLocaleString();
    const addHistoty = {
      id: shortid.generate(),
      type,
      amount: userNumeric,
      date: dateToString,
    };
    return addHistoty;
  };

  handleControlsAddDeposit = num => {
    const type = 'deposit';
    const addHistory = this.addHistotyItem(type, num);
    const userNumeric = parseInt(num.numeric, 10);
    if (userNumeric === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(num.numeric, 10),
        history: [...prevState.history, addHistory],
      }));
    }
  };

  handleControlsAddWithdraw = num => {
    const currentBalance = this.state.balance;
    const type = 'withdraw';
    const userNumeric = parseInt(num.numeric, 10);
    const addHistory = this.addHistotyItem(type, num);
    if (userNumeric > currentBalance) {
      alert('На счету недостаточно средств для проведения операции!');
    } else if (userNumeric === 0) {
      alert('Введите сумму для проведения операции!');
    } else {
      this.setState(prevState => ({
        balance: prevState.balance - userNumeric,
        history: [...prevState.history, addHistory],
      }));
    }
  };

  render() {
    const { history, balance } = this.state;

    return (
      <div>
        <Controls
          onDeposit={this.handleControlsAddDeposit}
          onWithdraw={this.handleControlsAddWithdraw}
        />
        <Balance transactions={history} balance={balance} />
        <TransactionHistory transactions={history} />
      </div>
    );
  }
}
