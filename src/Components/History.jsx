import React, { Fragment, useContext } from "react";
import { GlobalContext } from "../Context/globalState";
import { List } from "./List";
import note from "../img/note.svg"
export const History = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <Fragment>
      <h4>History</h4>
      <hr />
      {transactions.length < 1 ? (
        <div className="noData">
          <h2 className="display-3">There is no History</h2>

          <div className="noteImg">
            <img src={note} alt="note_image" />
          </div>
        </div>
      ) : (
        <ul className="list-group list-group-flush mb-3">
          {transactions.map((transaction) => (
            <List key={transaction.id} transaction={transaction} />
          ))}
        </ul>
      )}
    </Fragment>
  );
};
