import Container from './styled/Container.styled';
import Row from './styled/Row.styled';
import items from '../data/items';
import DropDown from './DropDown';
import Icon from './styled/Icon.styled';
import Text from './styled/Text.styled';
import theme from '../theme';
import Input from './styled/Input.styled';

export default function Header() {
  return (
    <Container padding='1rem'>
      <Row justify='space-between'>
        <Row gap='1rem'>
          <Row gap='.5rem'>
            <DropDown data={getUniqueCategories()} />
            <DropDown data={getUniqueSizes()} />
          </Row>
          <Row gap='.2rem'>
            <Icon
              className='fa-solid fa-rotate-left'
              color={theme.colors.blue}
            ></Icon>
            <Text color={theme.colors.blue} size='.9rem' weight='bold'>
              Reset
            </Text>
          </Row>
        </Row>
        <Row gap='1.5rem'>
          <Row gap='.5rem'>
            <Text size='.9rem' weight='bold' color={theme.colors.grey}>Search:</Text>
            <Input padding='.5rem' bg={theme.colors.accent} border='0' radius='.2rem' shadow={`inset .1rem .1rem ${theme.colors.shadow}`} weight='bold' />
          </Row>
          <Container padding='.7rem 1.3rem' bg={theme.colors.blue}>
            <Text size='.9rem' weight='bold' color='white'>Add To Cart</Text>
          </Container>
        </Row>
      </Row>
    </Container>
  );
}

// function to get all the unique categories of the items
function getUniqueCategories() {
  // list to store the unique categories
  const uniqueCategories = ['All'];

  // for every item
  for (let item of items) {
    let { type } = item;

    // getting the first char as uppercase and updating the type
    type = type[0].toUpperCase() + type.substring(1, type.length);

    if (!uniqueCategories.includes(type)) {
      uniqueCategories.push(type);
    }
  }

  return uniqueCategories;
}

// function to get unique sizes
function getUniqueSizes() {
  // list to store the unique sizes
  const uniqueSizes = ['Size'];

  // for every item
  for (let item of items) {
    let { size } = item;

    if (!uniqueSizes.includes(size)) {
      uniqueSizes.push(size);
    }
  }

  return uniqueSizes;
}
