import { Grid, Box, Stack, Typography } from "@mui/material";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeader from "./components/GameHeading";

export interface GameQuery {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  searchText: string;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          setSearchQuery={(searchText) =>
            setGameQuery({ ...gameQuery, searchText })
          }
        />
      </Box>

      <Box
        sx={{
          gridArea: "aside",
          p: 2,
          display: { xs: "none", lg: "block" },
        }}
      >
        <Stack direction="row" spacing={2} mb={2} pl={2}>
          <Typography variant="h5">{"Genres"}</Typography>
        </Stack>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
          selectedGenreId={gameQuery.genreId}
        />
      </Box>

      <Box
        sx={{
          gridArea: "main",
          p: 2,
        }}
      >
        <Stack direction="row" spacing={2} mb={2} pl={2}>
          <GameHeader gameQuery={gameQuery} />
        </Stack>
          <Stack direction="row" spacing={2} mb={2} pl={2}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
              sx={{ flex: 1 }}
            />

            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Stack>
        <GameGrid gameQuery={gameQuery} />
      </Box>
    </Grid>
  );
}
