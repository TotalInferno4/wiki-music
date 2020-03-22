import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./GroupeRock.css";
import MembreGroupeRock from "./MembreGroupeRock";

const GroupeRock = ({members}) => {
  let listeDesMembres = members.map((m, index) => (
    <MembreGroupeRock membre={m} key={index} />
  ));

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="headTable">Nom</TableCell>
            <TableCell className="headTable">Date de naissance</TableCell>
            <TableCell className="headTable">Date d'entrée dans le groupe</TableCell>
            <TableCell className="headTable">Instruments de musique</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listeDesMembres}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default GroupeRock;
