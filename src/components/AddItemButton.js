import { Button } from "@mui/material";
import { useContext } from "react";
import { GroceryListContext } from "../context/GroceryListContext";

export const AddItemButton = () => {
  const { input, groceryList, setGroceryList, setInput } =
    useContext(GroceryListContext);

  const onClick = () => {
    if (!input) {
      return;
    }
    const newList = [...groceryList, input];
    setGroceryList(newList);
    setInput("");
  };

  return (
    <div className="add-item-button-container">
      <Button color="primary" variant="contained" onClick={onClick}>
        Add
      </Button>
    </div>
  );
};
