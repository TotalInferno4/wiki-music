import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';

import "./AlbumInfos.css";

import metallica from "../../data/mettalica";
import BadgeAlbum from "./BadgeAlbum";
import AlbumSongs from "./AlbumSongs";


const AlbumInfos = ({ match }) => {
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
	);
};

export default AlbumInfos;
