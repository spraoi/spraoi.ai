/* eslint-disable prefer-destructuring */

import { darken, lighten, transparentize } from 'polished';

const deepBlue = '#0a2239';
const green = '#1de91d';
const orange = '#ffcb20';
const red = '#ff2020';
const spraoiBlue = '#06bce3';
const white = '#fefefe';
const whiteBlue = '#f8fbfe';

const grays = [
  '#efeeef',
  '#d1d0d2',
  '#bbbbbc',
  '#a5a5a6',
  '#7b7a7d',
  '#2e2e31',
  '#1d1d21',
];

const breakpoints = ['300px', '600px', '900px', '1200px', '1500px'];
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const fontSizeScale = 1.4;

export default {
  baseFontSizesForBreakpoint: ['5vw', '4vw', '2.5vw', '1.5vw', '18px'],
  breakpoints,
  colors: {
    accent: spraoiBlue,
    accentBg: transparentize(0.03, spraoiBlue),
    accentDark: darken(0.15, spraoiBlue),
    accentLight: lighten(0.15, spraoiBlue),
    body: whiteBlue,
    border: grays[0],
    error: red,
    grays,
    primary: deepBlue,
    primaryBg: transparentize(0.03, deepBlue),
    primaryDark: darken(0.05, deepBlue),
    primaryLight: lighten(0.15, deepBlue),
    success: green,
    text: {
      heading: spraoiBlue,
      link: spraoiBlue,
      primary: deepBlue,
      subtle: grays[4],
    },
    warning: orange,
    white,
  },
  fonts: {
    mono: 'Menlo, monospace',
    primary: '"Raleway", sans-serif',
    secondary: '"Futura", sans-serif',
  },
  fontSizes: [
    '0.5rem',
    '0.55rem',
    '0.65rem',
    '1rem',
    `${fontSizeScale}rem`,
    `${fontSizeScale ** 2}rem`,
    `${fontSizeScale ** 3}rem`,
  ],
  fontWeights: { bold: 700, light: 500, normal: 500, semibold: 600 },
  letterSpacings: ['0.05em', '0.1em', '0.125em'],
  lineHeights: ['1.4em', '1.6em', '2em'],
  radii: ['2px', '4px', '8px'],
  shadows: [
    'none',
    '0 22px 44px 0 rgba(14, 14, 33, 0.25)',
    '1px 1px 2px 2px #eceff1',
  ],
  sizes: {
    heights: { input: `calc(1.6em + 0.75rem * 2)` },
    maxWidths: {
      button: '14rem',
      content: '1200px',
      lg: '1200px',
      md: '800px',
      paragraph: '38em',
      sm: '500px',
    },
  },
  space: [
    '0',
    '0.25rem',
    '0.375rem',
    '0.5rem',
    '0.75rem',
    '1.25rem',
    '2rem',
    '3.25rem',
    '5.25rem',
    '8.5rem',
  ],
  variants: {
    buttons: {
      primary: {
        '&:hover': { bg: 'accentDark' },
        bg: 'accent',
        borderColor: 'transparent',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 1,
        color: 'white',
        fontSize: 2,
        fontWeight: 'bold',
        height: 'heights.input',
        letterSpacing: 0,
        px: 7,
        py: 4,
        textTransform: 'uppercase',
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
      },
    },
    inputs: {
      primary: {
        '&::placeholder': { color: 'grays.3' },
        '&:focus': { borderColor: 'primary' },
        bg: 'white',
        borderColor: 'grays.2',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        color: 'text.primary',
        px: 4,
        py: 4,
      },
    },
  },
};
