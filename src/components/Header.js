import { useEffect, useState } from 'react';
import Container from './styled/Container.styled';
import Row from './styled/Row.styled';
import Icon from './styled/Icon.styled';
import Text from './styled/Text.styled';
import theme from '../theme';
import Input from './styled/Input.styled';
import useItemsStore from '../stores/itemsStore';
import Select from './styled/Select.styled';

export default function Header() {
  // default values for type and size
  const DEFAULT_TYPE = 'all';
  const DEFAULT_SIZE = 'size';

  const items = useItemsStore((state) => state.items);

  // getting the function that applies the filters
  const applyFilters = useItemsStore((state) => state.applyFilters);

  // getting the function that returns the items that match the search
  const applySearch = useItemsStore((state) => state.applySearch);

  // state for filter category
  const [typeFilter, setTypeFilter] = useState(DEFAULT_TYPE);

  // state for filter size
  const [sizeFilter, setSizeFilter] = useState(DEFAULT_SIZE);

  // search state
  const [searchValue, setSearchValue] = useState('');

  // getting the unique categories
  const uniqueCategories = getUniqueCategories(items);

  // getting the unique sizes
  const uniqueSizes = getUniqueSizes(items);

  // when the type size, or the search value changes, update
  useEffect(() => {
    applyFilters(typeFilter, sizeFilter);
    applySearch(searchValue);
  }, [typeFilter, sizeFilter, searchValue]);

  return (
    <Container padding='1rem'>
      <Row justify='space-between'>
        <Row gap='1rem'>
          <Row gap='.5rem'>
            <Select
              padding='.3rem .1rem'
              width='6rem'
              border={`.15rem solid ${theme.colors.border}`}
              radius='.3rem'
              bg='transparent'
              onChange={(e) => {
                setTypeFilter(e.target.value);
              }}
              value={typeFilter}
            >
              {uniqueCategories.map((item) => (
                <option key={item} value={item}>
                  {getStringAsUppercase(item)}
                </option>
              ))}
            </Select>
            <Select
              padding='.3rem .1rem'
              width='6rem'
              border={`.15rem solid ${theme.colors.border}`}
              radius='.3rem'
              bg='transparent'
              onChange={(e) => {
                setSizeFilter(e.target.value);
              }}
              value={sizeFilter}
            >
              {uniqueSizes.map((item) => (
                <option key={item} value={item}>
                  {getStringAsUppercase(item)}
                </option>
              ))}
            </Select>
          </Row>
          <Row
            gap='.2rem'
            cursor='pointer'
            onClick={() => {
              setTypeFilter(DEFAULT_TYPE);
              setSizeFilter(DEFAULT_SIZE);
            }}
          >
            <Icon
              className='fa-solid fa-rotate-left'
              color={theme.colors.blue}
              size='.9rem'
            ></Icon>
            <Text color={theme.colors.blue} size='.9rem' weight='bold'>
              Reset
            </Text>
          </Row>
        </Row>
        <Row gap='1.5rem'>
          <Row gap='.5rem'>
            <Text size='.9rem' weight='bold' color={theme.colors.grey}>
              Search:
            </Text>
            <Input
              padding='.5rem'
              bg={theme.colors.accent}
              border='0'
              radius='.2rem'
              shadow={`inset .1rem .1rem ${theme.colors.shadow}`}
              weight='bold'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Row>
          <Container padding='.7rem 1.3rem' bg={theme.colors.blue}>
            <Text size='.9rem' weight='bold' color='white'>
              Add To Cart
            </Text>
          </Container>
        </Row>
      </Row>
    </Container>
  );
}

// function to get all the unique categories of the items
function getUniqueCategories(items) {
  // list to store the unique categories
  const uniqueCategories = ['all'];

  // for every item
  for (let item of items) {
    let { type } = item;

    if (!uniqueCategories.includes(type)) {
      uniqueCategories.push(type);
    }
  }

  return uniqueCategories;
}

// function to get unique sizes
function getUniqueSizes(items) {
  // list to store the unique sizes
  const uniqueSizes = ['size'];

  // for every item
  for (let item of items) {
    let { size } = item;

    if (!uniqueSizes.includes(size)) {
      uniqueSizes.push(size);
    }
  }

  return uniqueSizes;
}

// function to get the first char as upper case
function getStringAsUppercase(str) {
  return str[0].toUpperCase() + str.substring(1);
}
