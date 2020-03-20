import React from "react";
import "./MembreGroupeRock.css";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const MembreGroupeRock = ({ membre }) => {
  let listInstruments = membre.instruments.map((instrument, index) => (
      <li key={index}>{instrument}</li>
  ));
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {membre.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {membre.birthDate}
      </TableCell>
      <TableCell component="th" scope="row">
        {membre.begin}
      </TableCell>
      <TableCell component="th" scope="row">
      <ul>{listInstruments}</ul>
      </TableCell>
    </TableRow>
  );

};

export default MembreGroupeRock;
