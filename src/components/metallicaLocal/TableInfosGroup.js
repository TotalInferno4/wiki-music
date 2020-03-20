import React from "react";
import "./TableInfosGroup.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const TableInfosGroup = ({ groupInfos }) => {
    let listLabels = groupInfos.labels.map((label, index) => (
        <div key={index} >- {label} </div>
    ));


    return (
    <TableContainer component={Paper}>
      <Table>   
        <TableHead>
          <TableRow>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell component="th" scope="row">
                <b>Date de création du groupe :</b>
                </TableCell>
                <TableCell component="th" scope="row">
                {groupInfos.lifeSpan.begin}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">
                <b>Pays :</b>
                </TableCell>
                <TableCell component="th" scope="row">
                {groupInfos.location.country}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">
                <b>Ville d'origine :</b>
                </TableCell>
                <TableCell component="th" scope="row">
                {groupInfos.location.city}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell component="th" scope="row">
                <b>Nombre de fans sur Deezer :</b>
                </TableCell>
                <TableCell component="th" scope="row">
                {groupInfos.deezerFans}
                </TableCell>
            </TableRow>  
            <TableRow>
                <TableCell component="th" scope="row">
                <b>Labels :</b>
                </TableCell>
                <TableCell component="th" scope="row">
                {listLabels}
                </TableCell>
            </TableRow>     
        </TableBody>
      </Table>
    </TableContainer>
);

};

export default TableInfosGroup;