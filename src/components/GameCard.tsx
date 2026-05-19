import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Stack,
} from "@mui/material";
import type { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={game.background_image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              minHeight: 64,
            }}
          >
            {game.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {/* <ul style={{ listStyle: "none", padding: 0, margin: 0 }}> */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <PlatformIconsList
                platforms={game.parent_platforms.map((pp) => pp.platform)}
              />
              <CriticScore score={game.metacritic} />
            </Stack>
            {/* </ul> */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default GameCard;
