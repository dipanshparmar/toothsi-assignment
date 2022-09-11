import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify};
  column-gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  cursor: ${props => props.cursor};
  width: ${props => props.width};

  @media screen and (max-width: 768px) {
    flex-direction: ${props => props.mdInvert && 'column'};
    row-gap: ${props => props.mdRowGap};
    justify-content: ${props => props.mdJustify};
  }

  @media screen and (max-width: 425px) {
    width: ${props => props.smWidth};
    flex: ${props => props.smFlex};
    column-gap: ${props => props.smColGap};
  }
`;

export default Row;
