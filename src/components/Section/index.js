import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const HeroSection = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space.xl};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.single
        ? css`
            text-align: center;
          `
        : css`
            display: grid;
            grid-template-columns: 58% 42%;
          `};
  }
`;

HeroSection.propTypes = {
  single: PropTypes.bool,
};

HeroSection.defaultProps = {
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
      p.single
        ? css`
            text-align: center;
          `
        : css`
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
  single: PropTypes.bool,
  top: PropTypes.string,
};

Section.defaultProps = {
  bottom: {},
  single: false,
  top: null,
};

const SectionH1 = styled.h1`
  position: relative;
  left: -${p => p.theme.space.xxxs};
  color: ${p => p.theme.colors.primaryDark};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: 1em;
  white-space: nowrap;

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    font-size: ${p => p.theme.fontSizes.xxl};
  }

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes.hero};
  }
`;

const SectionH2 = styled.h2`
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.sm};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    line-height: 1em;
  }

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
  margin-right: auto;
  margin-left: auto;
  letter-spacing: ${p => p.theme.letterSpacings.sm};
  line-height: ${p => p.theme.lineHeights.lg};
`;

const TextRight = styled.div`
  @media (min-width: ${p => p.theme.breakpoints.md}) {
    order: 2;
  }
`;

const FiguresLeft = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: block;
    margin-right: ${p => p.theme.space.xl};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -${p => p.theme.space.xl};
  }
`;

const FiguresRight = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    display: block;
    margin-left: ${p => p.theme.space.xl};
  }

  @media (min-width: ${p => p.theme.breakpoints.xl}) {
    top: -${p => p.theme.space.lg};
    right: -${p => p.theme.space.xl};
    margin: 0;
  }
`;

const IconFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9.2rem;
  height: 9.2rem;
  padding: ${p => p.theme.space.sm} ${p => p.theme.space.sm}
    ${p => p.theme.space.xs};
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.boxShadows.md};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.sm};
  line-height: ${p => p.theme.lineHeights.md};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings.lg};
`;

const StyledIcon = styled.div`
  height: 4rem;
  width: 4rem;
  fill: ${p => p.theme.colors.white};
`;

export {
  FiguresLeft,
  FiguresRight,
  HeroSection,
  IconFigure,
  Section,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  StyledIcon,
  TextRight,
};
