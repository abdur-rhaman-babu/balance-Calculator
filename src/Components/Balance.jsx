import { useContext } from "react";
import { globalContext } from "./Context/GlobalState";

const Balance = () => {
    const {transactions} = useContext(globalContext)
    const amounts = transactions.map((transaction)=>transaction.amount)
    // console.log(amounts);

    const total = amounts.reduce((acc,amount)=>{
        return acc+=amount
    },0).toFixed(2)
    // console.log(total);
    return (
        <>
            <h4>Your Balance</h4>
            <div><h1>${total}</h1></div>
        </>
    );
};

export default Balance;