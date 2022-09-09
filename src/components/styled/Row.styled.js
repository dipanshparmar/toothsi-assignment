import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify};
  column-gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
`;

export default Row;
