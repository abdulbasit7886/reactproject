import React, { Component } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          name: "Abdul",
          age: 21,
          Grade: "A",
        },
        {
          name: "Basit",
          age: 21,
          Grade: "B",
        },
        {
          name: "Nawaz",
          age: 21,
          Grade: "C",
        },
      ],
      status: true
    };
  }

  render() {
    return (
        <>
<div>
<Button variant="outlined" startIcon={<SendIcon />} onClick={()=>{this.state.status===false?this.setState({status:true}):this.setState({status:false})}}>
          Click on this for show List
        </Button>
      </div> 
      <br />
       <div>

        
      <TableContainer component={Paper}>

        <Table sx={{ minWidth: 1000 }} aria-label="customized table">
          <TableHead>

            <TableRow>


              <StyledTableCell align="center">RollNo</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Grade</StyledTableCell>
            </TableRow>
          </TableHead>
          {

          this.state.status ?
    
          <TableBody>
          <StyledTableCell align="left"></StyledTableCell>

            {this.state.list.map((row, i) => (
              <StyledTableRow key={i}>

                <StyledTableCell align="center">{i}</StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">{row.age}</StyledTableCell>
                <StyledTableCell align="center">{row.Grade}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>:<></>
          }

        </Table>
      </TableContainer>
      </div>
      </>

    );
  }
}

export default List;
