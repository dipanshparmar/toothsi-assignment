import styled from 'styled-components';

const Table = styled.table`
  width: ${props => props.width || '100%'};
  border-collapse: collapse;
`

const TableRow = styled.tr`
  background-color: ${props => props.bg};

  th, td {
    padding: ${props => props.dataPadding};
    text-align: ${props => props.dataAlign};
    vertical-align: ${props => props.dataAlignVertical};
  }
`

const TableHeading = styled.th`
  width: ${props => props.width};
`

const TableData = styled.td`
  width: ${props => props.width};
`

const THead = styled.thead`
  border-bottom: ${props => props.borderB};
`

const TBody = styled.tbody`
  border-bottom: ${props => props.borderB};
`

export { Table, TableRow, TableHeading, TableData, THead , TBody }