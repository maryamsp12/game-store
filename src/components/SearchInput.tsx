import { InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface Props {
  onSearch: (input: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState("");

  return (
    <Box
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(searchText);
      }}
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "background.paper",
        borderRadius: 1,
        px: 2,
      }}
    >
      <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
      <InputBase
        name="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search games..."
        inputProps={{ "aria-label": "search" }}
      />
    </Box>
  );
};
