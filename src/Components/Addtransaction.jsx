import { useContext, useState } from "react";
import { globalContext } from "./Context/GlobalState";

const Addtransaction = () => {
 const {addTransaction} =  useContext(globalContext)
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  // addTransaction
const submitTransaction = (e)=>{
  e.preventDefault()
  emptyInput()
  const newTransaction ={
    id:Math.floor(Math.random()*100000000),
    text,
    amount:+amount
  }

  addTransaction(newTransaction)
}

const emptyInput =()=>{
  setAmount('')
  setText('')
}
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submitTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default Addtransaction;
