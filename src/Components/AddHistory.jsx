import React, { Fragment, useContext, useState } from "react";
import { GlobalContext } from "../Context/globalState";
import ErrorIcon from '@mui/icons-material/Error';


export const AddHistory = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };
  return (
    <Fragment>
      <h4>Add new transaction</h4>
      <hr />
      <p className="note m-0"> 
          <ErrorIcon /> 
           negative - expense , positive - income{" "}
        </p>
        
        <br />
      <form action="#" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="text" className="input-group-text">
            Text
          </label>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            name="text"
            id="text"
            placeholder="Enter Text.."
            className="form-control"
          />
        </div>
        <br />

        
        <div className="input-group">
          <label
            htmlFor="amount"
            className="input-group-text"
          >
            Amount
          </label>
          <input
            type="number"
            name="text"
            id="amount"
            placeholder="Enter Amount.."
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        
        <br />
        <div className="d-grid ">
          <button type="submit" className="btn  btn-info text-light">
            Add transaction
          </button>
        </div>
      </form>
    </Fragment>
  );
};
