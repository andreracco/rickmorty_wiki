import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = {
     ...chakraTheme.fonts,
     heading: '"Avenir Next", sans-serif',
     body: "system-ui, sans-serif",
     mono: "Menlo, monospace"
};

const fontSizes = {
     xs: "0.75rem",
     sm: "0.875rem",
     md: "1rem",
     lg: "1.125rem",
     xl: "1.25rem",
};

const breakpoints = ["40em", "52em", "64em", "80em"];

const theme = {
     ...chakraTheme,
     fonts,
     fontSizes,
     breakpoints
};

export default theme;