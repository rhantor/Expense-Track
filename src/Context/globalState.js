import React, { createContext, useEffect, useReducer } from "react";
const initialState = {
  transactions: [
    {
      id: 0 ,
      text: "" ,
      amount: 0 ,
    }
  ],
};
// create context api
export const GlobalContext = createContext(initialState);

function AppReducer(state, action) {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
}
// create context provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState , ()=>{
    const localData = localStorage.getItem('state')
    return localData ? JSON.parse(localData) : state ;
  });

  useEffect(()=>{
    localStorage.setItem('state' , JSON.stringify(state))
  },[state])
  // action 

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
