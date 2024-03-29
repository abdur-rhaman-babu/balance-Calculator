/* eslint-disable react/jsx-key */
import { useContext, useEffect } from "react";
import { globalContext } from './Context/GlobalState';
import Transaction from "./Transaction";


const TransactionList = () => {
  const {transactions} = useContext(globalContext)
  // console.log(transactions);

  // setLocalStroage
useEffect(() => {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}, [transactions]);
    return (
        <>
        <h3>History</h3>
        <ul className="list">
          {
            transactions && transactions.map((transaction)=><Transaction key={transaction.id} transaction={transaction}/>)
          }
        </ul>
      </>
    );
};

export default TransactionList;