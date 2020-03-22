import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useTheme } from '@material-ui/core/styles';
import "./MetallicaInfos.css";
import metallica from "../../data/mettalica";
import AlbumCard from "./AlbumCard";
import BadgeGroup from "./BadgeGroup";
import TableInfosGroup from "./TableInfosGroup";
import GroupeRock from "../GroupeRock";

const MetallicaInfos = () => {
	let metallicaData = metallica;
	const theme = useTheme();

	return (
			<div className="Hobbies">
			<CssBaseline />
				<Container maxWidth="md" className="globalContainer">	

					<BadgeGroup 
						name={metallica.name}
						image={metallica.picture.medium}
						genres={metallica.genres}
					/>

					<h2>Description : </h2>
					<p>{metallica.abstract}</p>
					<TableInfosGroup groupInfos={metallica} />

					<h2>Membres du groupe : </h2>
					<GroupeRock members={metallica.members} />

					<h2>Albums : </h2>
					<AlbumCard albums={metallica.albums}/>
				</Container>

			
			</div>

	);
};

export default MetallicaInfos;
