import styled from 'styled-components';

const Container = styled.div`
  padding: ${props => props.padding};
  margin: ${props => props.margin};
  background-color: ${props => props.bg};
  color: ${props => props.color};
  border: ${props => props.border || 0};
  border-radius: ${props => props.radius};
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: ${props => props.bgImg && `url('${props.bgImg}')`};
  background-size: ${props => props.bgImg && 'cover'};
  background-position: ${props => props.bgImg && 'center'};
  display: ${props => props.center && 'flex'};
  justify-content: ${props => props.center && 'center'};
  align-items: ${props => props.center && 'center'};
  cursor: ${props => props.cursor};
  flex: ${props => props.flex};
  overflow-x: ${props => props.overflowX};

  @media screen and (max-width: 1024px) {
    flex: ${props => props.lgFlex};
  }

  @media screen and (max-width: 768px) {
    width: ${props => props.mdWidth};
  }

  @media screen and (max-width: 375px) {
    padding: ${props => props.smPadding};
  }
`

export default Container