import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Section = styled.section`
  position: relative;
  margin-top: ${p => p.theme.space[8]};

  ${p =>
    p.small &&
    css`
      margin-top: ${p => p.theme.space[6]};
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      !p.small &&
      css`
        margin-top: ${p => p.theme.space[9]};
      `};

    ${p =>
      !p.single &&
      css`
        display: flex;
      `};

    ${p =>
      !p.top &&
      css`
        align-items: center;
      `};

    ${p =>
      p.center &&
      css`
        text-align: center;
      `};
  }
`;

Section.propTypes = {
  center: PropTypes.bool,
  single: PropTypes.bool,
  small: PropTypes.bool,
  top: PropTypes.bool,
};

Section.defaultProps = {
  center: false,
  single: false,
  small: false,
  top: false,
};

const HeroSection = styled(Section)`
  margin-top: ${p => p.theme.space[8]};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    margin-top: ${p => p.theme.space[8]};
  }
`;

const SectionH1 = styled.h1`
  position: relative;
  left: -0.1rem;
  margin-bottom: ${p => p.theme.space[4]};
  color: ${p => p.theme.colors.primaryDark};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: 1.4em;
  white-space: ${p => (p['data-wrap'] ? 'wrapLine' : 'nowrap')};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

SectionH1.propTypes = {
  'data-wrap': PropTypes.bool,
};

SectionH1.defaultProps = {
  'data-wrap': false,
};

const SectionH2 = styled.h2`
  margin-bottom: ${p => p.theme.space[5]};
  font-size: ${p => p.theme.fontSizes[5]};
  line-height: 1.1em;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    font-size: ${p => p.theme.fontSizes[5]};
  }
`;

const SectionH3 = styled.h3`
  margin: ${p => p.theme.space[2]} 0;

  ${p =>
    p.white &&
    css`
      color: ${p => p.theme.colors.white};
    `};
`;

SectionH3.propTypes = {
  white: PropTypes.bool,
};

SectionH3.defaultProps = {
  white: false,
};

const SectionParagraph = styled.p`
  max-width: ${p => p.theme.sizes.maxWidths.paragraph};
  letter-spacing: ${p => p.theme.letterSpacings[0]};
  line-height: ${p => p.theme.lineHeights[2]};
  text-align: justify;

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
  display: flex;
  flex-wrap: wrap;
  margin-top: ${p => p.theme.space[3]};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 57%;
    margin-top: 0;

    ${p =>
      p.left &&
      css`
        flex-direction: row-reverse;
      `};
  }
`;

Figures.propTypes = {
  left: PropTypes.bool,
};

Figures.defaultProps = {
  left: false,
};

const Figure = styled.figure`
  margin: ${p => p.theme.space[5]} ${p => p.theme.space[5]} 0 0;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    position: relative;
    margin: 0;
  }
`;

const IconFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9.8rem;
  height: 9.8rem;
  padding: ${p => p.theme.space[5]};
  border-radius: ${p => p.theme.radii[2]};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows[1]};
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes[2]};
  font-weight: ${p => p.theme.fontWeights.semibold};
  line-height: ${p => p.theme.lineHeights[1]};
  text-transform: uppercase;
  letter-spacing: ${p => p.theme.letterSpacings[2]};

  figcaption {
    margin-bottom: -${p => p.theme.space[2]};
  }

  ${p =>
    p.small &&
    css`
      width: 7.4rem;
      height: 7.4rem;
      justify-content: center;
      align-items: center;
      padding: ${p => p.theme.space[4]};
      font-size: ${p => p.theme.fontSizes[1]};
      text-align: center;
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p.smallOnMedium &&
      css`
        width: 7.4rem;
        height: 7.4rem;
        justify-content: center;
        align-items: center;
        padding: ${p => p.theme.space[4]};
        font-size: ${p => p.theme.fontSizes[1]};
        text-align: center;
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

const ProcessFigure = styled.figure`
  margin-top: ${p => p.theme.space[6]};
  padding: ${p => p.theme.space[5]};
  border-radius: ${p => p.theme.radii[2]};
  background-color: ${p => p.theme.colors.primary};
  box-shadow: ${p => p.theme.shadows[1]};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    width: 40%;
    margin: 0 0 0 ${p => p.theme.space[7]};
  }
`;

const StyledIcon = styled.div`
  height: 2.8rem;
  width: 2.8rem;
  margin-bottom: ${p => p.theme.space[4]};
  fill: ${p => p.theme.colors.white};

  ${p =>
    p['data-small'] &&
    css`
      width: 2.2rem;
      height: 2.2rem;
    `};

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    ${p =>
      p['data-small-on-medium'] &&
      css`
        width: 2.2rem;
        height: 2.2rem;
      `};
  }
`;

StyledIcon.propTypes = {
  'data-small': PropTypes.bool,
  'data-small-on-medium': PropTypes.bool,
};

StyledIcon.defaultProps = {
  'data-small': false,
  'data-small-on-medium': false,
};

const StyledImage = styled.div`
  width: 9.8rem;
  height: 9.8rem;
  border-radius: ${p => p.theme.radii[2]};
  box-shadow: ${p => p.theme.shadows[1]};
  overflow: hidden;

  ${p =>
    p.clickable &&
    css`
      transition: transform 0.2s;
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }
    `};
`;

StyledImage.propTypes = {
  clickable: PropTypes.bool,
};

StyledImage.defaultProps = {
  clickable: false,
};

const SectionUnorderedList = styled.ul`
  margin-top: ${p => p.theme.space[5]};
  margin-left: ${p => p.theme.space[5]};
  list-style: initial;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    margin-left: ${p => p.theme.space[7]};
  }
`;

const SectionBg = styled.div`
  position: absolute;
  top: ${p => p.top};
  right: ${p => p.right};
  left: ${p => p.left};
  width: 75rem;
  height: 75rem;
  opacity: ${p => p.opacity};
  z-index: -1;
`;

SectionBg.propTypes = {
  left: PropTypes.string,
  opacity: PropTypes.number,
  right: PropTypes.string,
  top: PropTypes.string,
};

SectionBg.defaultProps = {
  left: 'auto',
  opacity: 1,
  right: 'auto',
  top: 'auto',
};

export {
  Figure,
  Figures,
  HeroSection,
  IconFigure,
  Order2,
  ProcessFigure,
  Section,
  SectionBg,
  SectionH1,
  SectionH2,
  SectionH3,
  SectionParagraph,
  SectionUnorderedList,
  StyledIcon,
  StyledImage,
};
