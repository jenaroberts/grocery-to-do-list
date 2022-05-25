import { createContext, useState } from "react";

export const GroceryListContext = createContext({});

export const GroceryListContextProvider = ({ children }) => {
  const { Provider } = GroceryListContext;
  const [input, setInput] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const value = {
    input,
    setInput,
    groceryList,
    setGroceryList,
  };
  return <Provider value={value}>{children}</Provider>;
};
