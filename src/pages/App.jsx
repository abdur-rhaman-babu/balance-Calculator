import Header from "../Components/Header";
import "../Components/App.css";
import Balance from "../Components/Balance";
import IncomeExpense from "../Components/IncomeExpense";
import TransactionList from "../Components/TransactionList";
import Addtransaction from "../Components/Addtransaction";
import { GlobalProvider } from "../Components/Context/GlobalState";
const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList/>
        <Addtransaction/>
      </div>
    </GlobalProvider>
  );
};

export default App;
