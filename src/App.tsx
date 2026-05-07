import { Grid, Box } from "@mui/material";

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
          backgroundColor: "coral",
          p: 2,
        }}
      >
        Nav
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