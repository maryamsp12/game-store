import { FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import usePlatforms, { type Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {

  const [platform, setPlatform] = useState("");
  const { data: platforms } = usePlatforms();

  const handleChange = (event: SelectChangeEvent) => {
    setPlatform(event.target.value);
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-filled-label">Platform</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={platform}
        onChange={handleChange}
        label="Platform"
      >
        {platforms?.map((platform: Platform) => (
          <MenuItem key={platform.id} value={platform.id} onClick={() => onSelectPlatform(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PlatformSelector;
