import { Link } from 'react-router-dom';
import Column from '../components/styled/Column.styled';
import Container from '../components/styled/Container.styled';
import Text from '../components/styled/Text.styled';
import theme from '../theme';
import useCartStore from '../stores/cartStore';
import { useEffect } from 'react';

export default function Thanks() {
  // getting the clear cart action
  const clearCart = useCartStore(state => state.clearCart)

  // clearing the cart
  useEffect(() => {
    clearCart()
  }, [])

  const cartItems = useCartStore(state => state.cartItems)
  console.log(cartItems)
  return (
    <Container height='100vh' width='100%' center={true} bg={theme.colors.border} padding='0 2rem'>
      <Column gap='1rem'>
        <Text weight='bold' align='center'>
          Thanks for shopping with us. Looking forward to see you again in
          future.
        </Text>
        <Text>Go to <Link to='/'>Home</Link></Text>
      </Column>
    </Container>
  );
}
