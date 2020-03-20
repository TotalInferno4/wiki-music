import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Link } from "react-router-dom";

import "./AlbumCard.css";

import metallica from "../../data/mettalica";


const AlbumCard = ({albums}) => {
  let listeAlbums = albums.map((a, index) => (
      
    <Grid item xs={3} key={index}>
        <Link to= {"/local/album/" + index}>
        <Card className="root">
            <CardActionArea>
            <CardMedia
                className="media"
                image={a.cover ? a.cover.standard : "http://www.audioproceedings.com/CadmiumCD/custom/images/recordings/CD-icon.png"}
                title="Album"
            />
                <CardContent className="cardInfos">
                    <Typography variant="body1" gutterBottom>
                        {a.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="cardInfos">
                <Button className="buttonDetail" size="small" color="secondary">
                    ({a.publicationDate})
                </Button>
                <Button className="buttonDetail" size="small" color="primary">
                    Voir les titres
                </Button>
            </CardActions>
        </Card>
        </Link>
    </Grid>
  ));

  return (
    <Grid container spacing={3}>
        {listeAlbums}
    </Grid>
  );
};

export default AlbumCard;
