import React from "react";
import './App.css';
import Header from "./My_Components/Header/Header";
import Nav from "./My_Components/NavBar/Nav";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from "./My_Components/News/News"
import Music from "./My_Components/Music/Music";
import Settings from "./My_Components/Settings/Settings";
import Footer from "./My_Components/Footer/Footer";
import DialogsContainer from "./My_Components/Dialogs/DialogsContainer";
import UsersContainer from "./My_Components/Users/UsersContainer";
import ProfileContainer from "./My_Components/Profile/ProfileContainer";
import HeaderContainer from "./My_Components/Header/HeaderContainer";
import LoginPage from './My_Components/Login/Login'
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized){
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/profile/" element={<ProfileContainer/>}/>
                            <Route path="/dialogs" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/News" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
