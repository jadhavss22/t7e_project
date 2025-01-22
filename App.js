import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LeftDrawer from './Components/LeftDrawer';
import BodyComponent from './Components/Body';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <LeftDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <div style={{ padding: '20px' }}>
        <Switch>
          <Route path="/" exact>
            <BodyComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;