/* eslint-disable prefer-destructuring */

import { darken, lighten, transparentize } from 'polished';

const deepBlue = '#0a2239';
const green = '#1de91d';
const orange = '#ffcb20';
const red = '#ff2020';
const spraoiBlue = '#06bce3';
const white = '#fefefe';
const whiteBlue = '#f6f9fc';

const grays = [
  '#efeeef',
  '#d1d0d2',
  '#bbbbbc',
  '#a5a5a6',
  '#7b7a7d',
  '#2e2e31',
  '#1d1d21',
];

const fontSizeScale = 1.4;

export default {
  baseFontSizesForBreakpoint: ['4vw', '4vw', '2.5vw', '1.5vw', '18px'],
  breakpoints: ['300px', '600px', '900px', '1200px', '1500px'],
  colors: {
    accent: spraoiBlue,
    accentDark: darken(0.075, spraoiBlue),
    accentLight: lighten(0.05, spraoiBlue),
    body: whiteBlue,
    bodyDark: darken(0.03, whiteBlue),
    bodyLight: lighten(0.01, whiteBlue),
    border: grays[0],
    error: red,
    grays,
    primary: deepBlue,
    primaryBg: transparentize(0.03, deepBlue),
    primaryDark: darken(0.05, deepBlue),
    primaryLight: lighten(0.05, deepBlue),
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
    '0.6rem',
    '0.7rem',
    '0.8rem',
    '1rem',
    `${fontSizeScale}rem`,
    `${fontSizeScale ** 2}rem`,
    `${fontSizeScale ** 3}rem`,
    `${fontSizeScale ** 4}rem`,
  ],
  fontWeights: { bold: 700, light: 500, normal: 500, semibold: 600 },
  letterSpacings: ['0.05em', '0.1em', '0.125em'],
  lineHeights: ['1.4em', '1.6em', '2em'],
  radii: ['2px', '4px', '8px'],
  shadows: [
    'none',
    '0 17.6px 35.2px 0 rgba(14, 14, 33, 0.1)',
    '0 22px 44px 0 rgba(14, 14, 33, 0.15)',
    '1px 1px 1px 1px #eceff1',
  ],
  sizes: {
    heights: { input: `calc(1.6em + 0.75rem * 2)` },
    maxWidths: {
      content: '1200px',
      paragraph: '34rem',
      title: '52rem',
      wideParagraph: '44rem',
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
        fontSize: 1,
        fontWeight: 'semibold',
        height: 'heights.input',
        letterSpacing: 0,
        px: 7,
        py: 4,
        textTransform: 'uppercase',
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
      },
      secondary: {
        '&:hover': {
          bg: 'accentDark',
          borderColor: 'accentDark',
          color: 'white',
        },
        bg: 'white',
        borderColor: 'white',
        borderRadius: 1,
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: 1,
        color: 'accentDark',
        fontSize: 1,
        fontWeight: 'semibold',
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
        borderColor: 'grays.1',
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
