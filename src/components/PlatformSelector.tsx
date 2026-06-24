import { Button, Menu, MenuItem} from "@mui/material";
import type { SxProps } from "@mui/material";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";
import { useState } from "react";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId: number | undefined;  // ← add
  sx?: SxProps;                        // ← add
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data: platforms } = usePlatforms();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        {selectedPlatformId ? `Platform: ${platforms?.find(p => p.id === selectedPlatformId)?.name}` : "Platform"}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {platforms?.map((platform: Platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id}
            onClick={() => {
              onSelectPlatform(platform);
              handleClose();
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PlatformSelector;
