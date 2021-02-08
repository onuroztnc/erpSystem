import React from 'react'
import Navbar from './NavigationBar/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Products from './pages/Products'
import './App.css';

const HomePage = ({ handleLogout }) => {
    return (
        // <section className="home">
        //     <nav>
        //         <h2>Home Page</h2>
        //         <button onClick={handleLogout}>Log Out</button>
        //     </nav>
        // </section>
        <>
            <Router>
                <Navbar handleLogout={handleLogout} />
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/reports' component={Reports}></Route>
                    <Route path='/products' component={Products}></Route>
                </Switch>
            </Router>
        </>
    )
}
export default HomePage;