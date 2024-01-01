import { useContext } from "react";
import { globalContext } from "./Context/GlobalState";


const IncomeExpense = () => {
  const {transactions} = useContext(globalContext)
  // console.log(transactions);
  const amounts = transactions.map((transaction)=>transaction.amount)
  // console.log(amounts);

  // Total Income-------------------------------------------------------------//
  const incomes = amounts.filter((amount)=>amount>=0)
  // console.log(totalIncome);
  const totalIncome= incomes.reduce((acc,income)=>acc+=income)
  // console.log(totalIncome);

  // Total expense-----------------------------------------------------------//
  const totalExpenses = amounts.filter((amount)=>amount<=0).reduce((acc,income)=>acc+=income)
  // console.log(totalExpenses);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${totalExpenses}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
