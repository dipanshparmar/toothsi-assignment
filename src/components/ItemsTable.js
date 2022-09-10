import {
  Table,
  TableRow,
  TableHeading,
  TableData,
} from './styled/Table.styled';
import theme from '../theme';
import Text from './styled/Text.styled';
import Row from './styled/Row.styled';
import Icon from './styled/Icon.styled';
import Container from './styled/Container.styled';
import Input from './styled/Input.styled';
import useItemsStore from '../stores/itemsStore';
import { useState } from 'react';
import useCartStore from '../stores/cartStore';

export default function ItemsTable() {
  const filtered = useItemsStore((state) => state.filtered);

  return (
    <>
      <Table>
        <Header />
        {filtered.length > 0 && (
          <tbody>
            <DataRows items={filtered} />
          </tbody>
        )}
      </Table>
      {!filtered.length && (
        <Container width='100%' center={true} margin='5rem 0'>
          <Text size='.9rem'>No items with these filters!</Text>
        </Container>
      )}
    </>
  );
}

// function to get the header
function Header() {
  return (
    <thead>
      <TableRow bg={theme.colors.accent} dataPadding='1rem' dataAlign='left'>
        <TableHeading width='fit-content'>
          <Text size='.9rem' color={theme.colors.black}>
            Image
          </Text>
        </TableHeading>
        <TableHeading width='20%'>
          <Row justify='space-between'>
            <Text size='.9rem' color={theme.colors.black}>
              Name
            </Text>
            <Icon
              className='fa-solid fa-caret-down'
              size='.9rem'
              color={theme.colors.black}
            ></Icon>
          </Row>
        </TableHeading>
        <TableHeading>
          <Row justify='space-between'>
            <Text size='.9rem' color={theme.colors.black}>
              Color
            </Text>
            <Icon
              className='fa-solid fa-sort'
              size='.9rem'
              color='#DDDDDD'
            ></Icon>
          </Row>
        </TableHeading>
        <TableHeading>
          <Row justify='space-between'>
            <Text size='.9rem' color={theme.colors.black}>
              Stock
            </Text>
            <Icon
              className='fa-solid fa-sort'
              size='.9rem'
              color='#DDDDDD'
            ></Icon>
          </Row>
        </TableHeading>
        <TableHeading>
          <Row justify='space-between'>
            <Text size='.9rem' color={theme.colors.black}>
              Price
            </Text>
            <Icon
              className='fa-solid fa-sort'
              size='.9rem'
              color='#DDDDDD'
            ></Icon>
          </Row>
        </TableHeading>
        <TableHeading width='20%'>
          <Text align='right' size='.9rem' color={theme.colors.black}>
            Buy
          </Text>
        </TableHeading>
      </TableRow>
    </thead>
  );
}

// function to get the data rows
function DataRows({ items }) {
  // getting the state functions
  const addItemToCart =  useCartStore((state) => state.addItemToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)

  return items.map((item) => {
    // grabbing the properties that we need
    const { id, image, color, name, price, quantity } = item;

    return (
      <TableRow dataPadding='1rem' dataAlignVertical='top' key={id}>
        <TableData width='0'>
          <Container height='5rem' width='5rem' bgImg={image}></Container>
        </TableData>
        <TableData>
          <Text
            size='.9rem'
            weight='bold'
            color={theme.colors.blue}
            underline={true}
          >
            {name}
          </Text>
        </TableData>
        <TableData>
          <Text
            size='.9rem'
            weight='bold'
            color={theme.colors.blue}
            underline={true}
          >
            {color}
          </Text>
        </TableData>
        <TableData>
          <Row gap='.5rem'>
            <Icon
              className={`fa-solid ${
                quantity > 0 ? 'fa-face-smile ' : 'fa-face-meh'
              }`}
              color={quantity > 0 ? theme.colors.green : 'red'}
            ></Icon>
            <Text
              size='.9rem'
              weight='bold'
              color={quantity > 0 ? theme.colors.green : 'red'}
            >
              {quantity > 0 ? 'In Stock' : 'Out of Stock'}
            </Text>
          </Row>
        </TableData>
        <TableData>
          <Text size='.9rem' weight='bold' color={theme.colors.grey}>
            ${price}
          </Text>
        </TableData>
        <TableData>
          <Row justify='end' gap='.5rem'>
            <Row gap='.3rem'>
              <Row gap='1rem' align='start'>
                <Container>
                  <Text weight='bold' size='.7rem'>
                    qty. {quantity}
                  </Text>
                </Container>
                <Input
                  size='1'
                  border='0'
                  bg={theme.colors.accent}
                  shadow={`inset .1rem .1rem ${theme.colors.shadow}`}
                  padding='0 1rem'
                  height='2rem'
                  weight='bold'
                  defaultValue={quantity > 0 ? '1' : '-'}
                  disabled={quantity > 0 ? false : true}
                  max={quantity}
                />
              </Row>
              <Container
                height='2rem'
                padding='0 1.3rem'
                bg='#333333'
                center={true}
              >
                <Icon
                  className='fa-solid fa-shopping-cart'
                  size='.8rem'
                  color='white'
                ></Icon>
              </Container>
            </Row>
            <Input type='checkbox' disabled={quantity > 0 ? false : true} onChange={(e) => {
              // getting the status
              const isChecked = e.target.checked

              // if checked then add the item to the cart
              if (isChecked) {
                addItemToCart(item)
              } else {
                // otherwise remove from cart
                removeFromCart(item.id)
              }
            }} />
          </Row>
        </TableData>
      </TableRow>
    );
  });
}
