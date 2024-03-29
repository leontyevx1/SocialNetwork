import React, {Suspense} from "react";
import './App.css';
import Nav from "./My_Components/NavBar/Nav";
import {Routes, Route} from "react-router-dom";
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
import {Navigate} from "react-router-dom";

const News = React.lazy(() => import("./My_Components/News/News"));
const Music = React.lazy(() => import("./My_Components/Music/Music"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app-wrapper-content'>
                        <Suspense fallback={<Preloader/>}>
                            <Routes>
                                <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                                <Route path="/profile/" element={<ProfileContainer/>}/>
                                <Route path="/dialogs" element={<DialogsContainer/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/News" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/login" element={<LoginPage/>}/>
                                <Route exact path="/" element={<Navigate to={'/profile'}/>}/>
                                <Route path='*' element={<div>404 NOT FOUND!</div>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
