import styled from 'styled-components';

const Content = styled.main`
  margin: 0 auto;
  padding: ${p => p.theme.space.md};
  max-width: ${p => p.theme.maxWidths.content};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space.lg};
  }
`;

export default Content;
