
import Grid from '@mui/material/Grid';
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Typography } from '@mui/material';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && (
        <Typography variant="h2" component="h1">
          {error}
        </Typography>
      )}

      <Grid container spacing={4} p={2}>
        {isLoading && skeletons.map((skeleton) => (
          <Grid key={skeleton} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <GameCardContainer>
              <GameCardSkeleton />
            </GameCardContainer>
          </Grid>
        ))}
        {games.map((game) => (
          <Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
            <GameCardContainer>
              <GameCard game={game} />
            </GameCardContainer>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
