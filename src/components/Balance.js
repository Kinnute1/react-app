import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Balance = () => {
  const { transactions } = useContext(GlobalContext);


  //  Calculating the total distances. 
  const km = transactions.map(transaction => transaction.distance);
  const totalKm = km
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(0);

//  Calculatin the total consumption. 
  const fuel = transactions.map(transaction => transaction.amount);
  const totalFuel = fuel
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(0);

//  Calculating the total costs
  const price = transactions.map(transaction => transaction.price);
  const totalPrice = price
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item),0)
  .toFixed(0);

//  Calculating the average price and consumption.
  const avgConsumption = (totalFuel / totalKm * 100).toFixed(2);
  const avgCost = (totalPrice / totalKm * 100).toFixed(2);


//  Formatting the outcome.
  const matka = transactions.distance < 0 ? ' km' : ' km';
  const hinta = transactions.price < 0 ? ' €' : ' €';
  const litra = transactions.amount < 0 ? ' liters' : ' liters';

  return (
      <div className="total-exp-container">
        <ul>
          <h4>Total Distance Covered</h4>
          <p>{totalKm}{matka}</p>
          <h4>Total Fuel Comsumption</h4>
          <p>{totalFuel}{litra}</p>
          <h4>Average Consumption per 100 km</h4>
          <p>{avgConsumption}{litra}</p>
          <h4>Average Expenses per 100km</h4>
          <p>{avgCost}{hinta}</p>
        </ul>
      </div>
  )
}



