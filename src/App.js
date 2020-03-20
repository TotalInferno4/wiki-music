import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import MetallicaInfos from "./components/metallicaLocal/MetallicaInfos";
import AlbumInfos from "./components/albumLocal/AlbumInfos";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

function App() {
  let nom = "Hello Madagascar";

  return (
    <div className="App">
      <BrowserRouter>

      <AppBar position="static">
      <Toolbar className="NavBar">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Metallica
        </Typography>
      </Toolbar>
    </AppBar> 


        

        <Route exact path="/" component={ListeHobbies}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        <Route path="/local/metallica" component={MetallicaInfos}></Route>
        <Route path="/local/album/:id" component={AlbumInfos}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
