import { Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Title({ title, color }) {

  return (
    <Stack sx={{ alignItems: "center" }}>
      <ThemeProvider theme={theme}>
        <Typography variant="h4"
          sx={{
            color: color,// fontSize: 36,
            textTransform: "uppercase", fontWeight: 700
          }} textAlign='center'>{title}</Typography></ThemeProvider>
      <Stack direction="row" sx={{ alignItems: 'center' }}>
        <Stack
          sx={{
            height: "4px",
            width: "80px",
            backgroundColor: color, mx: 1
          }}
        ></Stack>
        <StarIcon style={{ color: color }} />
        <Stack
          sx={{
            height: "4px",
            width: "80px",
            backgroundColor: color, mx: 1
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
}
