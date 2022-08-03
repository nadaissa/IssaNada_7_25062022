import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'

function App() {
    
    return (
        <Router>
            <Header />
                       
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path='/Mentions' element={<Mentions/>}/>
            </Routes>            
            
            <Footer />
        </Router>
    )
};

export default App;