import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Typography } from "@mui/material";

interface Game {
  id: number;
  name: string;
}
interface FetchGameresponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    apiClient
      .get<FetchGameresponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
    {error && (
      <Typography variant="h2" component="h1">
        {error}
      </Typography>
    )}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
