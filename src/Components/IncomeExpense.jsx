import React, { useContext } from "react";

import { GlobalContext } from "../Context/globalState";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense =
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1;
  return (
    <div>
      <div className="card p-2  justify-content-around flex-row mb-2">
        <div className="income">
          <h5>Income</h5>
          <p className="text-success">৳ {income}</p>
        </div>
        <div className="expense">
          <h5>Expense</h5>
          <p className="text-danger">৳ {expense}</p>
        </div>
      </div>
    </div>
  );
};
