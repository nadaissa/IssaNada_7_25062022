import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
<<<<<<< HEAD

=======
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
>>>>>>> dev

function App() {
    
    return (
        <Router>
            <Header />
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
<<<<<<< HEAD
=======
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path='/Mentions' element={<Mentions/>}/>
>>>>>>> dev
            </Routes>
            <Footer />
        </Router>
    )
};

export default App;