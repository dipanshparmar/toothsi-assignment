import Select from './styled/Select.styled';
import theme from '../theme'

export default function DropDown({ data }) {
  return (
    <Select padding='.3rem .1rem' width='6rem' border={`.15rem solid ${theme.colors.border}`} radius='.3rem' bg='transparent'>
      {data.map((item) => (
        <option key={item} value={item}>
          {getStringAsUppercase(item)}
        </option>
      ))}
    </Select>
  );
}

// function to get the first char as upper case
function getStringAsUppercase(str) {
  return str[0].toUpperCase() + str.substring(1,)
}