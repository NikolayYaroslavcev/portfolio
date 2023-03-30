import React from 'react';
import './App.scss';
import "./null.scss"
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";
import {GoToTop} from "./components/goToTop/GoToTop";


function App() {
    return (
        <div className="App">
            <Header/>
            <GoToTop/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
