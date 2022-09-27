import React from "react";
import './App.css';
import Header from "./My_Components/Header/Header";
import Nav from "./My_Components/NavBar/Nav";
import Profile from "./My_Components/Profile/Profile";
import Dialogs from "./My_Components/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./My_Components/News/News"
import Music from "./My_Components/Music/Music";
import Settings from "./My_Components/Settings/Settings";
import Main from "./My_Components/MainPage(DONT USE)/Main";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Routes>
{/*                        <Routes>
                            <Route path="/julia" element={<Profile/>}/>
                            <Route path="/anna" element={<Dialogs/>}/>
                            <Route path="/max" element={<News/>}/>
                            <Route path="/kruzha" element={<Music/>}/>
                            <Route path="/emin" element={<Settings/>}/>
                        </Routes>*/}
                        <Route path="/profile" element={<Profile/>}/>
                        <Route exact path="/dialogs" element={<Dialogs/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
);
}

export default App;