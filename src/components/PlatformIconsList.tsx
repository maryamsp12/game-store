import type { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaGamepad,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { Stack } from "@mui/system";
import { grey } from "@mui/material/colors";

interface Props {
  platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    pc: <FaWindows />,
    playstation: <FaPlaystation />,
    xbox: <FaXbox />,
    nintendo: <FaGamepad />,
    android: <FaAndroid />,
    ios: <MdPhoneIphone />,
    web: <BsGlobe />,
  };

  return (
    <Stack direction="row" spacing={1} marginY={1}>
      {platforms.map((p: Platform) => (
        <span key={p.id} style={{ color: grey[500], fontSize: 18 }}>{iconMap[p.slug]}</span>
      ))}
    </Stack>
  );
};

export default PlatformIconsList;
