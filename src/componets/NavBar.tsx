import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
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
        <Typography variant="h6">NavBar</Typography>
      </Stack>
      <ColorModeSwitch />
    </Stack>
  );
};

export default Navbar;
