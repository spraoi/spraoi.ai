import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.lg};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.center &&
      css`
        text-align: center;
      `};

    ${p =>
      p.flex &&
      css`
        display: flex;
      `};

    ${p =>
      !p.single &&
      !p.flex &&
      css`
        display: grid;
        grid-template-columns: 58% 42%;
      `};
  }
`;

HeroSection.propTypes = {
  center: PropTypes.bool,
  flex: PropTypes.bool,
  single: PropTypes.bool,
};

HeroSection.defaultProps = {
  center: false,
  flex: false,
  single: false,
};

const Section = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.xxl};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: ${p => p.theme.space.xxxl};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-top: ${p => p.top};
    padding-bottom: ${p => p.bottom.md};

    ${p =>
      p.center &&
      css`
        text-align: center;
      `};

    ${p =>
      !p.single &&
      css`
        display: grid;
        grid-template-columns: 1fr 1fr;
      `};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    padding-bottom: ${p => p.bottom.xl};
  }
`;

Section.propTypes = {
  bottom: PropTypes.shape({ md: PropTypes.string, xl: PropTypes.string }),
  center: PropTypes.bool,
  single: PropTypes.bool,
  top: PropTypes.string,
};

Section.defaultProps = {
  bottom: {},
  center: false,
  single: false,
  top: null,
};

const SectionH1 = styled.h1`
  position: relative;
  left: -${p => p.theme.space.xxxs};
  color: ${p => p.theme.colors.primaryDark};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.1em;
  white-space: ${p => (p.wrap ? 'wrap' : 'nowrap')};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.hero};
  }
`;

SectionH1.propTypes = {
  wrap: PropTypes.bool,
};

SectionH1.defaultProps = {
  wrap: undefined,
};

const SectionH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1.1em;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

const SectionH3 = styled.h3`
  margin: ${p => p.theme.space.xxxs} 0;
  color: ${p => p.theme.colors.white};
`;

const SectionParagraph = styled.p`
  max-width: ${p => p.theme.maxWidths.md};
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  line-height: ${p => p.theme.lineHeights.lg};

  ${p =>
    p.center &&
    css`
      margin-right: auto;
      margin-left: auto;
    `};
`;

SectionParagraph.propTypes = {
  center: PropTypes.bool,
};

SectionParagraph.defaultProps = {
  center: false,
};

const Order2 = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    order: 2;
  }
`;

const Figures = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${p =>
    p.small &&
    css`
      display: flex;
      flex-wrap: wrap;
    `};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.left
        ? css`
            margin-right: ${p => p.theme.space.xl};
          `
        : css`
            margin-left: ${p => p.theme.space.xl};
          `};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    ${p =>
      p.left
        ? css`
            top: -${p => p.theme.space.xl};
          `
        : css`
            top: -${p => p.theme.space.lg};
            right: -${p => p.theme.space.xl};
          `};

    ${p =>
      p.shift &&
      !p.left &&
      css`
        margin: 0;
      `};

    ${p =>
      !p.shift &&
      css`
        top: 0;
        right: 0;
      `};
  }
`;

Figures.propTypes = {
  left: PropTypes.bool,
  shift: PropTypes.bool,
  small: PropTypes.bool,
};

Figures.defaultProps = {
  left: false,
  shift: true,
  small: false,
};

const IconFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9.8rem;
  height: 9.8rem;
  padding: ${p => p.theme.space.md};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};

  ${p =>
    p.small &&
    css`
      width: 7.4rem;
      height: 7.4rem;
      justify-content: center;
      align-items: center;
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.smallOnMedium &&
      css`
        width: 7.4rem;
        height: 7.4rem;
        justify-content: center;
        align-items: center;
      `};
  }
`;

IconFigure.propTypes = {
  small: PropTypes.bool,
  smallOnMedium: PropTypes.bool,
};

IconFigure.defaultProps = {
  small: false,
  smallOnMedium: false,
};

const StyledIcon = styled.div`
  height: 3rem;
  width: 3rem;
  margin-bottom: ${p => p.theme.space.sm};
  fill: ${p => p.theme.colors.white};
`;

const StyledImage = styled.div`
  width: 9.8rem;
  height: 9.8rem;
  border-radius: ${p => p.theme.radii.lg};
  box-shadow: ${p => p.theme.boxShadows.md};
  transition: transform ${p => p.theme.transitionSpeeds.normal};
  overflow: hidden;

  &:hover {
    transform: scale(1.04);
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 10rem;
    height: 10rem;
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    width: 11rem;
    height: 11rem;
  }
`;

export {
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
  StyledImage,
};
