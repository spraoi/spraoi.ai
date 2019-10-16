import styled from 'styled-components';

const Content = styled.div`
  margin: 0 auto;
  padding: ${p => p.theme.space[5]};
  max-width: ${p => p.theme.sizes.maxWidths.content};

  @media (min-width: ${p => p.theme.breakpoints.sm}) {
    padding: ${p => p.theme.space[6]};
  }
`;

export default Content;
