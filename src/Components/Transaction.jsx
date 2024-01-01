/* eslint-disable react/prop-types */


const Transaction = ({transaction}) => {
    const {text,amount} = transaction;
// console.log(amount);
    return (
        <li className={amount<0 ? 'minus':'plus'}> {text}
            <span>
             {amount < 0 ? '-' : '+'} {Math.abs(amount)}
            </span><button className="delete-btn">x</button>
         </li>
    );
};

export default Transaction;