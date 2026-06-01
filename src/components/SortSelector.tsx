import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface Props {
  onSelectSortOrder: (sort: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  const setOrders =  [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  
  const currentSortOrder = setOrders.find(order => order.value === sortOrder)?.label || "Relevance";
  return (
    <>
      <Button onClick={handleOpen}>Sort by: {currentSortOrder}</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {setOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => {
              onSelectSortOrder(order.value);
              handleClose();
            }}
          >
            {order.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SortSelector;
