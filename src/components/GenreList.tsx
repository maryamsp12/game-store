import { List, ListItem, Stack, Typography } from "@mui/material";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Stack direction="row" spacing={2}>
            <img
              src={getCroppedImageUrl(genre.image_background)}
              alt={genre.name}
              style={{ width: 32, height: 32, borderRadius: 8 }}
            />
            <Typography variant="body1">{genre.name}</Typography>
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
