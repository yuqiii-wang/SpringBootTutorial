import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import EditScreen from './screens/EditScreen';
import GetFakecompanyAllProductsScreen from './screens/GetFakecompanyAllProductsScreen';
import TempHomeScreen from './screens/TempHomeScreen'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Switch>
            {/* <Route path="/add" > <AddScreen /> </Route> */}
            {/* <Route path="/edit/:id" component={EditScreen} /> */}
            <Route path="/product/show_all"> <GetFakecompanyAllProductsScreen /> </Route>
            <Route path="/" component={TempHomeScreen} /> {/* HomeScreen has to be on the last link route */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
