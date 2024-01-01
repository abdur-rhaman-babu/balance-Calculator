/* eslint-disable react/prop-types */

import { useContext } from "react";
import { globalContext } from "./Context/GlobalState";


const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(globalContext)
    const {text,amount,id} = transaction;
// console.log(id);
    return (
        <li className={amount<0 ? 'minus':'plus'}> {text}
            <span>
             {amount < 0 ? '-' : '+'} {Math.abs(amount)}
            </span><button onClick={()=>deleteTransaction(id)} className="delete-btn">x</button>
         </li>
    );
};

export default Transaction;