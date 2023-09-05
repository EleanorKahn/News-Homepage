import React from 'react';
import './css/App.css';
import './css/style.css';
import Header from './components/Header';
import MainArticle from './components/MainArticle';
import Sidebar from './components/Sidebar';
import FooterList from './components/FooterList';

function App() {
    return (
        <div className="App">
            <Header />
            <MainArticle />
            <Sidebar />
            <FooterList />
        </div>
    );
}

export default App;
