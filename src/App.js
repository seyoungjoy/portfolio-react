import React from 'react';
import About from './components/pages/About';
import Project from './components/pages/Project';
import Movie from './components/pages/Movie';
import Youtube from './components/pages/Youtube';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
  return (
    <Router>
      <Route path="/" exact component={About} />
      <Route path="/project" exact component={Project} />
      <Route path="/movie" exact component={Movie} />
      <Route path="/youtube" exact component={Youtube} />
      <Route path="/contact" exact component={Contact} />
    </Router>
  )
}

export default App;
