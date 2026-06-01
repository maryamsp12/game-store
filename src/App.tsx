import { Grid, Box } from "@mui/material";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

export default function App() {

  const[ gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
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
      <Box
        sx={{
          gridArea: "nav",
          p: 2,
        }}
      >
        <NavBar />
      </Box>

      <Box
        sx={{
          gridArea: "aside",
          p: 2,
          display: { xs: "none", lg: "block" },
        }}
      >
        <GenreList onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
      </Box>

      <Box
        sx={{
          gridArea: "main",
          p: 2,
        }}
      >
        <PlatformSelector onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
        <GameGrid gameQuery={gameQuery}/>
      </Box>
    </Grid>
  );
}
