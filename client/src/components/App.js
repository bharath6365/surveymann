import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>
 
const App = () => {
    return(
      <div className="container">
        {/* Browser Route can only have one child */}
       <BrowserRouter>
         <div>
           <Header />
           <Route exact={true} path = "/" component = {Landing} />
           <Route path = "/surveys" component = {Dashboard} />
           <Route exact={true} path = "/surveys/new" component = {SurveyNew} />
         </div>
       </BrowserRouter>
      </div>
    );
}

export default App;
