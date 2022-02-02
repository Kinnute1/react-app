import React,  { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Balance } from './Balance';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.price);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
      amounts
      .filter(item => item < 0)
      .reduce((acc, item) => (acc += item), 0) *
      -1).toFixed(2);

  const hinta = transactions.price < 0 ? ' €' : ' €';

  const price = transactions.map(transaction => transaction.price);
  const totalPrice = price
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(0);

  return (
    <div className="inc-exp-container">
        {/* <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Total Costs</h4>
          <p className="money minus">{expense}</p>
        </div> */}
        <div>
          <h4>Total Cost</h4>
          </div>
          <div>
          <h4>{totalPrice}{hinta}</h4>
          </div>
    </div>
  )
}

