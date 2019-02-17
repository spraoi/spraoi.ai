/* eslint-disable sort-keys */

import { darken, lighten, transparentize } from 'polished';

/* base colors */

const red = '#ff2020';
const orange = '#ffcb20';
const green = '#1de91d';
const spraoiBlue = '#46b2e2';
const deepBlue = '#0a2239';

const white = '#fefefe';
const gray1 = '#efeeef';
const gray2 = '#d1d0d2';
const gray3 = '#bbbbbc';
const gray4 = '#a5a5a6';
const gray5 = '#7b7a7d';
const gray6 = '#2e2e31';
const black = '#1d1d21';

/* theme colors */

const primary = deepBlue;
const primaryBg = transparentize(0.2, deepBlue);
const primaryDark = darken(0.15, deepBlue);
const primaryLight = lighten(0.15, deepBlue);

const accent = spraoiBlue;
const accentBg = transparentize(0.2, spraoiBlue);
const accentDark = darken(0.15, spraoiBlue);
const accentLight = lighten(0.15, spraoiBlue);

const success = green;
const warning = orange;
const error = red;

const body = white;
const border = gray2;

const textPrimary = lighten(0.15, black);
const textHeading = black;
const textLink = accent;
const textSubtle = lighten(0.2, black);

const inputPrimaryBg = white;
const inputPrimaryBorder = border;
const inputPrimaryBorderError = error;
const inputPrimaryBorderFocus = primary;
const inputPrimaryPlaceholderText = gray4;

const inputSecondaryBg = gray1;
const inputSecondaryBorder = border;
const inputSecondaryBorderError = error;
const inputSecondaryBorderFocus = primary;
const inputSecondaryPlaceholderText = gray5;

const buttonPrimaryBg = accent;
const buttonPrimaryHover = accentLight;
const buttonPrimaryActive = accentDark;
const buttonPrimaryText = white;

const buttonSecondaryBg = primary;
const buttonSecondaryHover = primaryLight;
const buttonSecondaryActive = primaryDark;
const buttonSecondaryText = white;

/* scale ratios */

const fontSizeScale = 1.2;

/* theme */

export default {
  baseFontSizeBeforeBreakpoint: {
    xs: '5.2vw',
    sm: '3.6vw',
    md: '18px',
    lg: '18px',
    xl: '18px',
  },
  boxShadows: {
    md: '0 3px 18px 0 rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    xs: '300px',
    sm: '500px',
    md: '800px',
    lg: '1200px',
    xl: '1600px',
  },
  colors: {
    accent,
    accentBg,
    accentDark,
    accentLight,
    black,
    body,
    border,
    buttonPrimaryActive,
    buttonPrimaryBg,
    buttonPrimaryHover,
    buttonPrimaryText,
    buttonSecondaryActive,
    buttonSecondaryBg,
    buttonSecondaryHover,
    buttonSecondaryText,
    error,
    gray1,
    gray2,
    gray3,
    gray4,
    gray5,
    gray6,
    inputPrimaryBg,
    inputPrimaryBorder,
    inputPrimaryBorderError,
    inputPrimaryBorderFocus,
    inputPrimaryPlaceholderText,
    inputSecondaryBg,
    inputSecondaryBorder,
    inputSecondaryBorderError,
    inputSecondaryBorderFocus,
    inputSecondaryPlaceholderText,
    primary,
    primaryBg,
    primaryDark,
    primaryLight,
    success,
    textHeading,
    textLink,
    textPrimary,
    textSubtle,
    warning,
    white,
  },
  fonts: {
    primary: '"Open Sans", sans-serif',
    secondary: '"Open Sans", sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xxs: `${1 / fontSizeScale / fontSizeScale / fontSizeScale}rem`,
    xs: `${1 / fontSizeScale / fontSizeScale}rem`,
    sm: `${1 / fontSizeScale}rem`,
    md: '1rem',
    lg: `${fontSizeScale}rem`,
    xl: `${fontSizeScale * fontSizeScale}rem`,
    xxl: `${fontSizeScale * fontSizeScale * fontSizeScale}rem`,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
  },
  letterSpacings: {
    sm: '0.05em',
    md: '0.1em',
    lg: '0.125em',
  },
  lineHeights: {
    sm: '1.2em',
    md: '1.4em',
    lg: '1.6em',
  },
  maxWidths: {
    button: '14rem',
    content: '800px',
    sm: '500px',
    md: '800px',
    lg: '1200px',
  },
  radii: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  space: {
    xxxs: '0.25rem',
    xxs: '0.375rem',
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1.25rem',
    lg: '2rem',
    xl: '3.25rem',
    xxl: '5.25rem',
    xxxl: '8.5rem',
  },
  transitionSpeeds: {
    fast: '.1s',
    normal: '.2s',
    slow: '.4',
  },
};
