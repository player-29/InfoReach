import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import TechNews from './pages/TechNews';
import Events from './pages/Events';
import Scholarships from './pages/Scholarships';
import Mentorships from './pages/Mentorships';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div className="container mx-auto px-4">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/tech-news" component={TechNews} />
                    <Route path="/events" component={Events} />
                    <Route path="/scholarships" component={Scholarships} />
                    <Route path="/mentorships" component={Mentorships} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
};

export default App;