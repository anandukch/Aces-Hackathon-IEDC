// export default function AppointmentTable(){
//     return <>
//     fswdfas
//     </>
// }
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, protein) {
  return { name, calories, fat, protein };
}

const rows = [
  createData('Frozen yoghurt', 19, "Dr. Sreerag", "9-10"),
  createData('Ice cream sandwich', 27, "Dr. Sreerag", "9-10"),
  createData('Eclair', 22, "Dr. Sreerag", "9-10"),
  createData('Cupcake', 35, "Dr. Sreerag", "9-10"),
  createData('Gingerbread', 36, "Dr. Sreerag", "9-10"),
];

export default function AppointmentTable() {
  return (
    <TableContainer component={Container}>
      <Table sx={{ maxWidth: 900 }} aria-label="customized table" align='center'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Doctor</StyledTableCell>
            <StyledTableCell align="right">Time slot</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
