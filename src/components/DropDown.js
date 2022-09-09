import Select from './styled/Select.styled';
import theme from '../theme'

export default function DropDown({ data }) {
  return (
    <Select padding='.3rem .1rem' width='6rem' border={`.15rem solid ${theme.colors.border}`} radius='.3rem' bg='transparent'>
      {data.map((d) => (
        <option key={d} value={d.toLowerCase()}>
          {d}
        </option>
      ))}
    </Select>
  );
}
