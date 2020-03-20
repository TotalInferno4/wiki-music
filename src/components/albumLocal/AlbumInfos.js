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

import { makeStyles, useTheme } from '@material-ui/core/styles';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';

import "./AlbumInfos.css";

import metallica from "../../data/mettalica";
import BadgeAlbum from "./BadgeAlbum";
import AlbumSongs from "./AlbumSongs";


const AlbumInfos = ({ match }) => {

	/*let listeDesMembres = metallica.members.map((m, index) => (
		<MembreGroupeRock membre={m} key={index} />
	));*/

	let metallicaData = metallica;
	let id = match.params.id;

	const theme = useTheme();


	return (
			<div className="Hobbies">
			<CssBaseline />
				<Container maxWidth="md" className="globalContainer">	

					<BadgeAlbum 
						name={metallica.albums[id].title}
						image={metallica.albums[id].cover ? metallica.albums[id].cover.standard : "http://www.audioproceedings.com/CadmiumCD/custom/images/recordings/CD-icon.png"}
						artist={metallica.name}
						year={metallica.albums[id].publicationDate}
					/>

					<h2>Titres de l'album : </h2>
					<AlbumSongs album={metallica.albums[id]}/>
				

				</Container>

			
			</div>

		/*<TableContainer component={Paper}>
		<Table size="small">
			<TableHead>
			<TableRow>
				<TableCell>Nom</TableCell>
				<TableCell>Date de naissance</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>{listeDesMembres}</TableBody>
		</Table>
		</TableContainer>*/
	);
};

export default AlbumInfos;
