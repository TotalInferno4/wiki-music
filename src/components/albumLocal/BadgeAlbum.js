import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import "./BadgeAlbum.css";

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
