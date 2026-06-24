import { Typography } from "@mui/material";
import type { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: Props) => {
    const {data: genres} = useGenres();
    const genre = genres?.find((g) => g.id === gameQuery.genreId);

    const {data: platforms} = usePlatforms();
    const platform = platforms?.find((p) => p.id === gameQuery.platformId);

    const header = `${platform?.name || ""} ${genre?.name || ""} Games`;

    return (
        <Typography variant="h4">{header}</Typography>
    );
};

export default GameHeader;
