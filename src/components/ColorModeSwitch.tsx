import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  useColorScheme,
} from "@mui/material";

const ColorModeSwitch = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Stack direction={"row"} alignItems="center" spacing={2}>
      <FormLabel id="demo-theme-toggle">Theme</FormLabel>
      <RadioGroup
        aria-labelledby="demo-theme-toggle"
        name="theme-toggle"
        row
        value={mode}
        onChange={(event) => setMode(event.target.value as "light" | "dark")}
      >
        <FormControlLabel value="light" control={<Radio />} label="Light" />
        <FormControlLabel value="dark" control={<Radio />} label="Dark" />
      </RadioGroup>
    </Stack>
  );
};

export default ColorModeSwitch;
