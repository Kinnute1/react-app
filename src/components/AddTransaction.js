import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


  export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [price, setPrice] = useState(0);
    const [distance, setDistance] = useState(0);
  
    const { addTransaction } = useContext(GlobalContext);
  
    const onSubmit = e => {
      e.preventDefault();
  
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount,
        price: +price,
        distance: +distance
      }
  
      addTransaction(newTransaction);
    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Car Model</label>
          <input type="text" required value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter the car model..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Fuel in Liters <br /></label>
          <input type="number" required value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter the fuel load..." />
        </div>
        <div className="form-control">
          <label htmlFor="price">Price in Euros<br /></label>
          <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Enter price of the refuel..." />
        </div>
        <div className="form-control">
          <label htmlFor="distance">Distance in Kilometers <br /></label>
          <input type="number" required value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Enter the distance driven since last refuel..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}


