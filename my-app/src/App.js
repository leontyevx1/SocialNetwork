import React from "react";
import './App.css';
import Header from "./My_Components/Header";
import Nav from "./My_Components/Nav";
import Profile from "./My_Components/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Profile/>
        </div>);
}

export default App;
