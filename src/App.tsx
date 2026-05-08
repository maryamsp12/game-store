import { Grid, Box } from "@mui/material";
import NavBar from "./componets/NavBar";

export default function App() {
  return (
    <Grid
      container
      sx={{
        display: "grid",
        gridTemplateAreas: {
          xs: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        },
        gridTemplateColumns: {
          xs: "1fr",
          lg: "250px 1fr",
        },
        gridTemplateRows: "auto 1fr",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <Box
        sx={{
          gridArea: "nav",
          p: 2,
        }}
      >
        <NavBar />
      </Box>

      {/* Aside (only show on lg) */}
      <Box
        sx={{
          gridArea: "aside",
          backgroundColor: "gold",
          p: 2,
          display: { xs: "none", lg: "block" },
        }}
      >
        Aside
      </Box>

      {/* Main */}
      <Box
        sx={{
          gridArea: "main",
          backgroundColor: "dodgerblue",
          p: 2,
        }}
      >
        Main
      </Box>
    </Grid>
  );
}
