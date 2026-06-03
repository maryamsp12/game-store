import { Box, Stack } from "@mui/material";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

interface Props {
  setSearchQuery: (query: string) => void;
}

const Navbar = ({ setSearchQuery }: Props) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          component="img"
          src={logo}
          alt="image"
          sx={{ width: 60, height: 60 }}
        />
      <SearchInput onSearch={(input) => setSearchQuery(input)} />
      </Stack>
      <ColorModeSwitch />
    </Stack>
  );
};

export default Navbar;
