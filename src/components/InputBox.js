import { Input } from "@mui/material";
import { useContext } from "react";
import { GroceryListContext } from "../context/GroceryListContext";

export const InputBox = () => {
  const { input, setInput } = useContext(GroceryListContext);

  return (
    <Input
      placeholder="Add Grocery Item Needed..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};
