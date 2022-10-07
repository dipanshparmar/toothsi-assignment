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
import CartItem from '../models/CartItem';
import { useEffect } from 'react';

export default function ItemsTable() {
  const filtered = useItemsStore((state) => state.filtered);

  return (
    <Container overflowX='auto'>
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
    </Container>
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
  return items.map((item) => <DataRow item={item} key={item.id} />);
}

function DataRow({ item }) {
  // grabbing the properties that we need
  const { id, image, color, name, price, quantity } = item;

  // getting the state functions
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const cartItems = useCartStore(state => state.cartItems)

  // deciding if current item is already in cart
  const isInCart = cartItems.filter(cartItem => {
    return cartItem.item.id === id
  })

  // state for quantity
  const [userQuantity, setUserQuantity] = useState(isInCart.length > 0 ? isInCart[0].quantity : quantity > 0 ? 1 : 0); // TODO

  // state for checkbox
  const [isChecked, setIsChecked] = useState(isInCart.length > 0 ? true: false);

  // to update when there is a change in checkbox
  useEffect(() => {
    // creating a cart item for current item
    const cartItem = new CartItem(item, userQuantity === '' ? 1 : userQuantity);

    // if checked then add the item to the cart
    if (isChecked) {
      addItemToCart(cartItem);
    } else {
      // otherwise remove from cart
      removeFromCart(cartItem);
    }
  }, [isChecked]);

  // when there is change in user quantity
  useEffect(() => {
    // creating the cart item
    const cartItem = new CartItem(item, userQuantity);

    // if the checkbox is checked
    if (isChecked) {
      console.log('changed quantity to', userQuantity === '' ? 1 : userQuantity)
      // update quantity
      updateQuantity(cartItem, userQuantity === '' ? 1 : userQuantity);
    }
  }, [userQuantity]);

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
          whiteSpace='nowrap'
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
              quantity > 0 ? 'fa-face-smile' : 'fa-face-meh'
            }`}
            color={quantity > 0 ? theme.colors.green : 'red'}
          ></Icon>
          <Text
            size='.9rem'
            weight='bold'
            color={quantity > 0 ? theme.colors.green : 'red'}
            whiteSpace='nowrap'
          >
            {item.quantity > 0 ? 'In Stock' : 'Out of Stock'}
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
          <Row gap='.3rem' align='start'>
            <Text size='.7rem' weight='bold' color={theme.colors.grey}>
              qty:
            </Text>
            <Text size='.8rem' weight='bold' color={theme.colors.grey}>
              {quantity}
            </Text>
            <Input
              border='0'
              bg={theme.colors.accent}
              shadow={`inset .1rem .1rem ${theme.colors.shadow}`}
              padding='0 1rem'
              height='2rem'
              weight='bold'
              type='number'
              value={userQuantity}
              smSize='.8rem'
              onChange={(e) => {
                // getting the target value
                const targetValue = e.target.value

                // if target value is not empty
                if (targetValue) {
                  // getting the integer
                  const targetValueInt = parseInt(targetValue)

                  // if target value is is the range then set it
                  if (targetValueInt <= quantity && targetValueInt > 0) {
                    setUserQuantity(targetValueInt)
                  }
                } else {
                  // if target value is empty then set the quantity as empty, on the cart page it will interpreted as 1
                  setUserQuantity('')
                }
              }}
              width='3.5rem'
              disabled={quantity > 0 ? false : true}
              color={quantity === 0 && theme.colors.grey}
            />
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
          <Input
            type='checkbox'
            smSize='.8rem'
            checked={isChecked}
            onChange={(e) => {
              // setting the state
              setIsChecked(e.target.checked);
            }}
            disabled={quantity > 0 ? false : true}
          />
        </Row>
      </TableData>
    </TableRow>
  );
}
