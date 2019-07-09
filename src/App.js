import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Task from './components/Task';
import Header from './components/Header';
import User from './components/User';
import Modal from './components/Modal';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Modal />
            <User />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/task/:id" component={Task} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
