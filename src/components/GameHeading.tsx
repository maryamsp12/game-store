import { Typography } from "@mui/material";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeader = ({ gameQuery }: Props) => {
    const header = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

    return (
        <Typography variant="h4">{header}</Typography>
    );
};

export default GameHeader;
