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
import Footer from "./My_Components/Footer/Footer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav state={props.state.sideBar}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile profilePage={props.state.profilePage}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/dialogs" element={<Dialogs dialogsPage={props.state.dialogsPage}
                                                                 dispatch={props.dispatch}
                        />}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
