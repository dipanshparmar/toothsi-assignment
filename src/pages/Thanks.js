import { Link } from 'react-router-dom';
import Column from '../components/styled/Column.styled';
import Container from '../components/styled/Container.styled';
import Text from '../components/styled/Text.styled';
import theme from '../theme';

export default function Thanks() {
  return (
    <Container height='100vh' width='100%' center={true} bg={theme.colors.border}>
      <Column gap='1rem'>
        <Text weight='bold'>
          Thanks for shopping with us. Looking forward to see you again in
          future.
        </Text>
        <Text>Go to <Link to='/'>Home</Link></Text>
      </Column>
    </Container>
  );
}
