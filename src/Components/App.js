import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "./Header";
import { Balance } from "./Balance";
import { IncomeExpense } from "./IncomeExpense";
import { History } from "./History";
import { AddHistory } from "./AddHistory";
import { GlobalProvider } from "../Context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 ">
            <Balance />
            <IncomeExpense />
            <AddHistory />
          </div>

          <div className="col-md-6 list-content">
            <History />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
