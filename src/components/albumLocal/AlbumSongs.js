import React from "react";
import "./AlbumSongs.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const AlbumSongs = ({ album }) => {
  let listSongs = album.songs.map((song, index) => (
    <TableRow key={index}>
    <TableCell component="th" scope="row">
      {index+1}
    </TableCell>
    <TableCell component="th" scope="row">
      {song.title}
    </TableCell>
  </TableRow>
  ));
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell className="headTable">Nº</TableCell>
            <TableCell className="headTable">Titre</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{listSongs}</TableBody>
      </Table>
    </TableContainer>
  );

};

export default AlbumSongs;
