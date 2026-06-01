import { Chip } from "@mui/material";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {

  if (!score) return null;

  const getColor = () => {
  if (score > 75) return "success";
  if (score > 60) return "warning";
  return "error";
};
  return <Chip
  label={score}
  color={getColor()}
/>;
};

export default CriticScore;
