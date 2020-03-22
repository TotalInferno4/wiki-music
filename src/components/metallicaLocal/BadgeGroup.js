import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "./BadgeGroup.css";

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
