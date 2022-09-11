import styled from 'styled-components';
import theme from '../../theme';

const Input = styled.input`
  border: ${props => props.border};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  outline: none;
  color: ${props => props.color || theme.colors.black};
  caret-color: ${props => props.color || theme.colors.black};
  background-color: ${props => props.bg};
  box-shadow: ${props => props.shadow};
  font-weight: ${props => props.weight};
  font-family: ${props => props.theme.fontFamily};
  height: ${props => props.height};
  width: ${props => props.width};

  @media screen and (max-width: 425px) {
    width: ${props => props.smWidth};
    font-size: ${props => props.smSize};
  }
`

export default Input