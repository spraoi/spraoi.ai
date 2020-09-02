/* eslint-disable prefer-destructuring */

import { darken, lighten } from 'polished';

const black = '#00182f';
const deepBlue = '#0a2239';
const offWhite = '#fafcfd';
const orange = '#ffcb20';
const red = '#ff2020';
const spraoiBlue = '#06bce3';
const white = '#fefefe';
const whiteBlue = '#f3f6f9';

const grays = [
  '#efeeef',
  '#d1d0d2',
  '#bbbbbc',
  '#a5a5a6',
  '#7b7a7d',
  '#2e2e31',
  '#1d1d21',
];

const bluePurpleScale = [
  '#13ABE1',
  '#209AE0',
  '#2D89DE',
  '#3A78DC',
  '#4767DB',
  '#5456D9',
];

const fontSizeScale = 1.4;

export default {
  baseFontSizesForBreakpoint: ['4vw', '4vw', '2.5vw', '1.5vw', '18px'],
  breakpoints: ['300px', '600px', '900px', '1200px', '1500px'],
  colors: {
    accent: spraoiBlue,
    accentDark: darken(0.075, spraoiBlue),
    accentLight: lighten(0.05, spraoiBlue),
    accentScale: bluePurpleScale,
    accentSecondary: orange,
    accentSecondaryDark: darken(0.1, orange),
    body: whiteBlue,
    border: grays[0],
    error: red,
    grays,
    offWhite,
    primary: deepBlue,
    primaryDark: darken(0.05, deepBlue),
    primaryLight: lighten(0.075, deepBlue),
    text: {
      heading: black,
      link: spraoiBlue,
      primary: deepBlue,
      subtle: grays[4],
    },
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
    '0.85rem',
    '1rem',
    `${fontSizeScale}rem`,
    `${fontSizeScale ** 2}rem`,
    `${fontSizeScale ** 3}rem`,
    `${fontSizeScale ** 4}rem`,
  ],
  fontWeights: { bold: 700, light: 500, normal: 500, semibold: 600 },
  letterSpacings: ['0.05em', '0.075em', '0.1em'],
  lineHeights: ['1.4em', '1.7em', '2em'],
  radii: ['none', '4px', '8px'],
  shadows: [
    'none',
    '0 17.6px 35.2px 0 rgba(14, 14, 33, 0.08)',
    '0 22px 44px 0 rgba(14, 14, 33, 0.12)',
    '1px 1px 1px 1px #eceff1',
  ],
  sizes: {
    heights: { input: `calc(1.6em + 0.75rem * 2)` },
    maxWidths: {
      content: '1200px',
      paragraph: '34rem',
      paragraphWide: '39rem',
      paragraphWider: '44rem',
      paragraphWidest: '53rem',
      title: '52rem',
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
        borderRadius: 1,
        boxShadow: 1,
        color: 'white',
        fontSize: 1,
        fontWeight: 'semibold',
        height: 'heights.input',
        letterSpacing: 1,
        px: 7,
        py: 4,
        textTransform: 'uppercase',
        transition: 'background-color 0.2s, color 0.2s',
      },
      secondary: {
        '&:hover': {
          bg: offWhite,
          borderColor: 'accentDark',
          color: 'accentDark',
        },
        bg: 'white',
        borderRadius: 1,
        boxShadow: 1,
        color: 'accent',
        fontSize: 1,
        fontWeight: 'semibold',
        height: 'heights.input',
        letterSpacing: 1,
        px: 7,
        py: 4,
        textTransform: 'uppercase',
        transition: 'background-color 0.2s, color 0.2s',
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
