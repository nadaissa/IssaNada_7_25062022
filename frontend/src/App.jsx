import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
//import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Feed from './pages/Feed'
import Users from './pages/Users'
import Contact from './pages/Contact'
import Mentions from './pages/Mentions'
import Modify from './pages/Modify'

function App() {
    
    return (
        <Router>
            <Header />
                       
            <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Signup" element={<Signup/>}/>
            <Route exact path="/Contact" element={<Contact/>}/>
            <Route exact path='/Mentions' element={<Mentions/>}/>
            <Route path='/Feed/:id' element={<Feed/>}/>
            <Route path='/Users' element={<Users/>}/>
            <Route exact path="/Modify/:id" element={<Modify/>}/>
            
            </Routes>            
            
            <Footer />
        </Router>
    )
};

export default App;