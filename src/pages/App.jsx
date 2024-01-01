import Header from "../Components/Header";
import "../Components/App.css";
import Balance from "../Components/Balance";
import IncomeExpense from "../Components/IncomeExpense";
import TransactionList from "../Components/TransactionList";
import Addtransaction from "../Components/Addtransaction";
const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList/>
        <Addtransaction/>
      </div>
    </div>
  );
};

export default App;
