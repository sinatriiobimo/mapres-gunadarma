import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import FacultyPage from 'pages/FacultyPage';
import Example from 'pages/Example';
import DetailNews from 'pages/DetailNews';
import NewsAll from 'pages/NewsAll';
import TablePage from 'pages/TablePage';
import FacultyDetails from 'json/facultyDetails.json';
import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/example" component={Example}></Route>
          <Route exact path="/news/:id" component={DetailNews}></Route>
          <Route exact path="/news" component={NewsAll}></Route>
          <Route exact path="/akademik/:id" component={TablePage}></Route>
          <Route exact path="/non-akademik/:id" component={TablePage}></Route>
          <Route exact path="/major/:id" component={TablePage}></Route>
          <Route exact path="/fakultas/:id" data={FacultyDetails} component={FacultyPage}></Route>
      </Router>
    </div>
  );
}

export default App;
