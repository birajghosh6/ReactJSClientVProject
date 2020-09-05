import React from 'react';
import './App.css';
import Login from './components/login';
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Router>
        <Route exact path="/" /*component={Login}*/ render = { props => (
                <React.Fragment>
                    <Login 
                      //addUser={this.addUser_App}
                    />
                </React.Fragment>
                )}
        />
      </Router>
    </div>
  );
}

export default App;
