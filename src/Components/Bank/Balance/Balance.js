import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, transactions }) => (
  <section className={styles.balance}>
    <span role="img" aria-label="upwards black arrow">
      ⬆️
      {transactions
        .filter(transaction => transaction.type === 'deposit')
        .reduce(function(sum, tr) {
          return sum + tr.amount;
        }, 0)}
      $
    </span>
    <span role="img" aria-label="downwards black arrow">
      ⬇️
      {transactions
        .filter(transaction => transaction.type === 'withdraw')
        .reduce(function(sum, tr) {
          return sum + tr.amount;
        }, 0)}
      $
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Balance;
