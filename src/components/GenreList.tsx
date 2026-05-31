import {
  CircularProgress,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import useGenres, { type Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <CircularProgress />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Stack direction="row" spacing={2}>
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
            <Typography
              onClick={() => onSelectGenre(genre)}
              sx={{
                fontWeight: genre.id === selectedGenre?.id ? "bold" : "normal",
                cursor: "pointer",
                "&:hover": { color: "primary.main" },
              }}
            >
              {genre.name}
            </Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
