import { Box, Stack, Typography } from "@mui/material";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <Stack direction={"row"} spacing={2} alignItems="center">
      <Box component="img" src={logo} alt="image" sx={{ width: 60,height: 60 }} />
      <Typography variant="h6">NavBar</Typography>
    </Stack>
  );
};

export default Navbar;
