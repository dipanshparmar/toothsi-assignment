import styled from 'styled-components';

const Text = styled.p`
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: ${props => props.color};
  text-align: ${props => props.align};
  border-bottom: ${props => props.underline && `.15rem solid ${props.color}`};
  width: ${props => props.underline && 'fit-content'};
  line-height: ${props => props.underline && '.6rem'};
  white-space: ${props => props.whiteSpace};
  text-align: ${props => props.align};
`

export default Text