import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store, { rrfProps } from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import AddClient from './components/clients/AddClient';
import ClientDetails from './components/clients/ClientDetails';


import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route exact path="/clients/add" component={AddClient} />
                  <Route exact path="/client/:id" component={ClientDetails} />
                </Switch>
              </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
