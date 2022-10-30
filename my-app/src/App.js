import React from "react";
import './App.css';
import Header from "./My_Components/Header/Header";
import Nav from "./My_Components/NavBar/Nav";
import Profile from "./My_Components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./My_Components/News/News"
import Music from "./My_Components/Music/Music";
import Settings from "./My_Components/Settings/Settings";
import Footer from "./My_Components/Footer/Footer";
import DialogsContainer from "./My_Components/Dialogs/DialogsContainer";
import UsersContainer from "./My_Components/Users/UsersContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav store={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile store={props.store}/>}/>
                        <Route path="/dialogs" element={<DialogsContainer store={props.store}/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
