import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  text-align: ${props => props.align};
`

export default Text