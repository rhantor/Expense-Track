import React, { useContext } from "react";
import { GlobalContext } from "../Context/globalState";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalAmount = amounts
    .reduce((prev, current) => (prev += current), 0)
    .toFixed(2);
    console.log(totalAmount);
  return (
    <div className="text-left">
      <h5>YOUR BALANCE</h5>
      <h2 className="text-primary"> {totalAmount < 0 ? <p className="text-danger" style={{fontSize : 16}}> <NewReleasesIcon /> Your expenses out of income</p> : totalAmount + " ৳" }  </h2>
    </div>
  );
};
