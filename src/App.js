import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import store, { rrfProps } from './store';


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
                </Switch>
              </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
