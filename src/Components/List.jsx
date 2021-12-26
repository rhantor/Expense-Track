import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../Context/globalState";
export const List = ({ transaction }) => {
  const {deleteTransaction} = useContext(GlobalContext)
  const sing = transaction.amount < 0 ? "-" : "+";
  return (
    <Fragment>
      <li
        className={`list-group-item d-flex justify-content-between list ${
          transaction.amount < 0 ? "minus" : "plus"
        } `}
      >
        <span>{transaction.text}</span>
        <span
          className={`${transaction.amount < 0 ? "minusAmount" : "plusAmount"}`}
        >
          {sing}৳ {Math.abs(transaction.amount)}{" "}
        </span>
        <button className="btn dlt-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
      </li>
    </Fragment>
  );
};
