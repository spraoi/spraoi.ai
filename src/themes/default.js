/* eslint-disable sort-keys */

import { darken, lighten, transparentize } from 'polished';

/* base colors */

const red = '#ff2020';
const orange = '#ffcb20';
const green = '#1de91d';
const spraoiBlue = '#06bce3';
const deepBlue = '#0a2239';
const whiteBlue = '#f8fbfe';

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
const primaryBg = transparentize(0.03, deepBlue);
const primaryDark = darken(0.05, deepBlue);
const primaryLight = lighten(0.15, deepBlue);

const accent = spraoiBlue;
const accentBg = transparentize(0.03, spraoiBlue);
const accentDark = darken(0.15, spraoiBlue);
const accentLight = lighten(0.15, spraoiBlue);

const success = green;
const warning = orange;
const error = red;

const body = whiteBlue;
const border = gray1;

const textPrimary = primary;
const textHeading = accent;
const textLink = accent;
const textSubtle = gray5;

const inputPrimaryBg = white;
const inputPrimaryBorder = border;
const inputPrimaryBorderError = error;
const inputPrimaryBorderFocus = accent;
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

const fontSizeScale = 1.55;

/* theme */

export default {
  baseFontSizeBeforeBreakpoint: {
    xs: '5vw',
    sm: '4vw',
    md: '2.5vw',
    lg: '1.66vw',
    xl: '20px',
  },
  boxShadows: {
    md: '0 22px 44px 0 rgba(14, 14, 33, 0.25)',
  },
  breakpoints: {
    xs: '300px',
    sm: '600px',
    md: '900px',
    lg: '1200px',
    xl: '1500px',
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
    primary: '"Raleway", sans-serif',
    secondary: '"Futura", sans-serif',
    mono: 'Menlo, monospace',
  },
  fontSizes: {
    xxs: `${1 / fontSizeScale / fontSizeScale / fontSizeScale}rem`,
    xs: `${1 / fontSizeScale / fontSizeScale}rem`,
    sm: `${1 / fontSizeScale}rem`,
    md: '1rem',
    lg: `${fontSizeScale}rem`,
    xl: `${fontSizeScale ** 2}rem`,
    xxl: `${fontSizeScale ** 3}rem`,
    hero: '5rem',
  },
  fontWeights: {
    light: 500,
    normal: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    sm: '0.05em',
    md: '0.1em',
    lg: '0.125em',
  },
  lineHeights: {
    sm: '1.4em',
    md: '1.6em',
    lg: '2em',
  },
  maxWidths: {
    button: '14rem',
    content: '1200px',
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
    slow: '.4s',
  },
};
