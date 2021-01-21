import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Read from './components/Read';
import './App.css';
import Footer from './inc/Footer';
import Header from './inc/Header';

function App() {
    return (
        <Router>
            <div className="page-container">
                <Header/>
                <div className="content-wrap">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to={'/'} className="navbar-brand">Cape AI </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/read'} className="nav-link">| About Thulani | </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                    <h2>
                        <br></br>TRUST | EXCELLENCE | ENTREPRENEURSHIP | FUN <br></br><br></br>
                    </h2>  
                <Switch>
                        <Route path='/read' component={Read} />
                        <img src="CAPEAI.jpg" alt="CAPE AI" />
                </Switch>
                </div>
                <Footer />
            </div>
        </Router>
  );
}
export default App;