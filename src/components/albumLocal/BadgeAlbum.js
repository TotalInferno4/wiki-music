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

import "./BadgeAlbum.css";

import metallica from "../../data/mettalica";


const BadgeAlbum = ({ name, image, artist, year }) =>  (
    <Card className="badgeAlbum">
        <CardMedia
            className="badgeAlbum-cover"
            image={image}
            title="Live from space album cover"
        />
        <div className="badgeAlbum-details">
            <CardContent className="badgeAlbum-content">
            <Typography component="h2" variant="h2">
                {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                <ul>Album du groupe {artist}</ul>
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                <ul>Année de sortie : {year}</ul>
            </Typography>
            </CardContent>
            
        </div>
    
    </Card>
);


export default BadgeAlbum;
