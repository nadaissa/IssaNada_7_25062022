import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import ContextLayout from './contexts/ContextLayout'


function App() {
    
    return (
        <Router>
            <Header />
                       
            <Routes>
            <Route element={<ContextLayout/>}>

            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path='/Mentions' element={<Mentions/>}/>
            <Route exact path='/Feed' element={<Feed/>}/>
            
            
            </Route>
            
            </Routes>            
            
            <Footer />
        </Router>
    )
};

export default App;