import useCartStore from '../stores/cartStore';
import Row from '../components/styled/Row.styled';
import Container from '../components/styled/Container.styled';
import {
  Table,
  TableData,
  TableHeading,
  TableRow,
  TBody,
  THead,
} from '../components/styled/Table.styled';
import Text from '../components/styled/Text.styled';
import theme from '../theme';
import Column from '../components/styled/Column.styled';
import Icon from '../components/styled/Icon.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Cart() {
  // getting the items
  const cartItems = useCartStore((state) => state.cartItems);

  // getting the total
  const total = useCartStore((state) => state.total);

  return (
    <Container margin='1rem'>
      {cartItems.length ? (
        <Row gap='2rem' align='start' mdInvert={true} mdRowGap='1rem'>
          <Container flex='4' width='100%' overflowX='auto'>
            <Table>
              <THead borderB={`.05rem solid ${theme.colors.border}`}>
                <TableRow dataPadding='2rem'>
                  <TableHeading width='50%'>
                    <Text
                      size='.85rem'
                      weight='bold'
                      color={theme.colors.black}
                    >
                      Product
                    </Text>
                  </TableHeading>
                  <TableHeading>
                    <Text
                      size='.85rem'
                      weight='bold'
                      color={theme.colors.black}
                    >
                      Price
                    </Text>
                  </TableHeading>
                  <TableHeading>
                    <Text
                      size='.85rem'
                      weight='bold'
                      color={theme.colors.black}
                    >
                      Quantity
                    </Text>
                  </TableHeading>
                  <TableHeading>
                    <Text
                      size='.85rem'
                      weight='bold'
                      color={theme.colors.black}
                    >
                      Subtotal
                    </Text>
                  </TableHeading>
                </TableRow>
              </THead>
              <TBody borderB={`.05rem solid ${theme.colors.border}`}>
                {cartItems.map((cartItem) => (
                  <CartItemRow cartItem={cartItem} key={cartItem.item.id} />
                ))}
              </TBody>
            </Table>
          </Container>
          <Container
            flex='1'
            border={`.15rem solid ${theme.colors.border}`}
            padding='1.5rem 1rem'
            radius='.2rem'
            mdWidth='100%'
            lgFlex='1.5'
          >
            <Column align='start' gap='1.5rem'>
              <Text color={theme.colors.purple} size='1.3rem'>
                Cart totals
              </Text>
              <Column align='start' gap='1rem' width='100%'>
                <Column gap='.5rem' width='100%'>
                  <Row justify='space-between' width='100%'>
                    <Text
                      weight='bold'
                      size='.8rem'
                      color={theme.colors.purple}
                    >
                      Subtotal
                    </Text>
                    <Text weight='bold' size='.8rem' color={theme.colors.grey}>
                      ${total.toFixed(2)}
                    </Text>
                  </Row>
                  <Container
                    height='.1rem'
                    width='100%'
                    bg={theme.colors.border}
                  ></Container>
                </Column>
                <Row justify='space-between' width='100%'>
                  <Text weight='bold' color={theme.colors.purple}>
                    Total
                  </Text>
                  <Text weight='bold' color={theme.colors.purple}>
                    ${total.toFixed(2)}
                  </Text>
                </Row>
              </Column>
              <Container width='100%'>
                <Link to='/thanks'>
                  <Container
                    bg={theme.colors.purple}
                    width='100%'
                    padding='1.2rem'
                    center={true}
                    radius='3rem'
                  >
                    <Text weight='bold' size='.85rem' color='white' align='center' whiteSpace='nowrap'>
                      PROCEED TO CHECKOUT
                    </Text>
                  </Container>
                </Link>
              </Container>
            </Column>
          </Container>
        </Row>
      ) : (
        <Container height='100vh' width='100%' center={true}>
          <Text align='center'>
            Nothing to show here. Try adding some items here{' '}
            <Link to='/'>/</Link>
          </Text>
        </Container>
      )}
    </Container>
  );
}

// function to get the cart item row
function CartItemRow({ cartItem }) {
  // remove from cart function
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  // quantity state
  const [userQuantity, setUserQuantity] = useState(cartItem.quantity);

  // function to update the quantity
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  // updating the quantity when there is a change in user quantity
  useEffect(() => {
    updateQuantity(cartItem, userQuantity);
  }, [userQuantity]);

  return (
    <TableRow dataPadding='1rem 0' dataAlign='center'>
      <TableData>
        <Row gap='1.5rem'>
          <Icon
            onClick={() => removeFromCart(cartItem)}
            className='fa-solid fa-close'
            color={theme.colors.black}
            size='.9rem'
            cursor='pointer'
          ></Icon>
          <Container
            bgImg={cartItem.item.image}
            height='5rem'
            width='5rem'
            radius='.2rem'
          ></Container>
          <Text color={theme.colors.black} size='.9rem' weight='bold' whiteSpace='nowrap'>
            {cartItem.item.name}
          </Text>
        </Row>
      </TableData>
      <TableData>
        <Text weight='bold' size='.9rem' color={theme.colors.grey}>
          ${cartItem.item.price}
        </Text>
      </TableData>
      <TableData>
        <Container center={true} width='100%'>
          <Container
            border={`.1rem solid ${theme.colors.border}`}
            padding='.9rem 1.5rem'
            radius='2rem'
            smPadding='.5rem 1rem'
          >
            <Row gap='1.5rem' smColGap='1rem'>
              <Icon
                className='fa-solid fa-minus'
                size='.8rem'
                color={theme.colors.grey}
                cursor='pointer'
                onClick={() => {
                  setUserQuantity((state) => {
                    if (state > 1) {
                      return state - 1;
                    } else {
                      return state;
                    }
                  });
                }}
              ></Icon>
              <Text color={theme.colors.black} size='.9rem' weight='bold'>
                {userQuantity}
              </Text>
              <Icon
                className='fa-solid fa-plus'
                size='.8rem'
                color={theme.colors.grey}
                cursor='pointer'
                onClick={() => {
                  setUserQuantity((state) => {
                    if (state < cartItem.item.quantity) {
                      return state + 1;
                    } else {
                      return state;
                    }
                  });
                }}
              ></Icon>
            </Row>
          </Container>
        </Container>
      </TableData>
      <TableData>
        <Text size='.9rem' color={theme.colors.purple} weight='bold'>
          ${(cartItem.item.price * userQuantity).toFixed(2)}
        </Text>
      </TableData>
    </TableRow>
  );
}
