import Grid from "@mui/material/Grid";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Button, Typography } from "@mui/material";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error)
    return (
      <Typography variant="h2" component="h1">
        {error.message}
      </Typography>
    );

  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={fetchNextPage}
        loader={<h4>Loading...</h4>}
      >
        <Grid container spacing={4} p={2}>
          {isLoading &&
            skeletons.map((skeleton) => (
              <Grid key={skeleton} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                <GameCardContainer>
                  <GameCardSkeleton />
                </GameCardContainer>
              </Grid>
            ))}
          {games?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <Grid key={game.id} size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
                  <GameCardContainer>
                    <GameCard game={game} />
                  </GameCardContainer>
                </Grid>
              ))}
            </React.Fragment>
          ))}
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
