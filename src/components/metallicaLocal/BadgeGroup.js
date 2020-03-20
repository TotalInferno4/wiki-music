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

import "./BadgeGroup.css";

import metallica from "../../data/mettalica";


const BadgeGroup = ({ name, image, genres }) => {
  let listeGenres = genres.map((g, index) => (
       <li key={index}>{g}</li> 
  ));

  return (
    <Card className="badgeGroup">
        <CardMedia
            className="badgeGroup-cover"
            image={image}
            title="Live from space album cover"
        />
        <div className="badgeGroup-details">
            <CardContent className="badgeGroup-content">
            <Typography component="h2" variant="h2">
                {name}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
                <ul>Genres : {listeGenres}</ul>
                
            </Typography>
            </CardContent>
            
        </div>
    
    </Card>
  );
};

export default BadgeGroup;
