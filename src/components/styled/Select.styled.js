import styled from 'styled-components';

const Select = styled.select`
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize};
  background-color: ${(props) => props.bg};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  outline: none;
  cursor: pointer;
  min-width: ${(props) => props.width};
  color: ${(props) => props.theme.colors.black};

  @media screen and (max-width: 425px) {
    font-size: ${props => props.smSize};
  }
`;

export default Select;
