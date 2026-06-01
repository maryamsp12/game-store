import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

interface Props {}

const SortSelector = ({}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Button onClick={handleOpen}>Sort by: Relevance</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem value={"relevance"}>Relevance</MenuItem>
        <MenuItem value={"date_added"}>Date Added</MenuItem>
        <MenuItem value={"name"}>Name</MenuItem>
        <MenuItem value={"release_date"}>Release Date</MenuItem>
        <MenuItem value={"popularity"}>Popularity</MenuItem>
        <MenuItem value={"average_rating"}>Average Rating</MenuItem>
      </Menu>
    </>
  );
};

export default SortSelector;
