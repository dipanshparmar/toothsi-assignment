import styled from 'styled-components';

const Container = styled.div`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border: ${props => props.border || 0};
  border-radius: ${props => props.radius};
`

export default Container