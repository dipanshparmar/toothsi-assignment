import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.gap};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify};
  width: ${props => props.width}
`

export default Column