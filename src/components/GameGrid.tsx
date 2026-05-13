
import Grid from '@mui/material/Grid';
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Typography } from '@mui/material';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && (
        <Typography variant="h2" component="h1">
          {error}
        </Typography>
      )}

      <Grid container spacing={4} p={2}>
        {games.map((game) => (
          <Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <GameCard  game={game} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
