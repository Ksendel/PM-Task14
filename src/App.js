import './App.css';
import Preview from "./components/Preview-page/Preview";
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import PhotoPage from "./components/Photo-page/PhotoPage";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import AlbumPage from "./components/Album-page/AlbumPage";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path={'/album/:albumId'} component={AlbumPage}/>
                    <Route path={'/photos/:photoId'} component={PhotoPage}/>
                    <Route path={'/'} component={Preview}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
