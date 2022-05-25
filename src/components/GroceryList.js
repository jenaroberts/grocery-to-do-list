import { useContext } from "react";
import { IconButton, List, ListItem } from "@mui/material";
import { GroceryListContext } from "../context/GroceryListContext";
import { CheckCircle } from "@mui/icons-material";

export const GroceryList = () => {
  const { groceryList, setGroceryList } = useContext(GroceryListContext);

  const removeItem = (index) => {
    groceryList.splice(index, 1);
    setGroceryList([...groceryList]);
  };

  return (
    <List>
      {groceryList.map((item, i) => {
        return (
          <ListItem key={item}>
            {item}
            <IconButton onClick={() => removeItem(i)}>
              <CheckCircle />
            </IconButton>
          </ListItem>
        );
      })}
    </List>
  );
};
