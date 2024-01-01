import { useState } from "react";

const Addtransaction = () => {
    const [text,setText] = useState('')
    const [amount,setAmount] = useState('')

    // balanceCalculatorHandle
    const balanceCalculatorHandle =(e)=>{
      e.preventDefault()


    }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={balanceCalculatorHandle}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type="submit" className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default Addtransaction;
