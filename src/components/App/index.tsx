import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FaCat, FaHome, FaUser } from 'react-icons/fa';

import HomeContainer from 'containers/HomeContainer';
import OwnersContainer from 'containers/OwnersContainer';

import styles from './App.module.scss';

const App = () => (
  <Router>
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <FaCat className={styles.logo} />
        <nav className={styles.nav}>
          <Link to="/" className={styles.navItem}>
            <FaHome className={styles.icon} />
            <span>Home</span>
          </Link>
          <Link to="/owners" className={styles.navItem}>
            <FaUser className={styles.icon} />
            <span>Owners</span>
          </Link>
        </nav>
      </div>
      <div className={styles.content}>
        <Switch>
          <Route path="/owners" component={OwnersContainer} />
          <Route path="/" component={HomeContainer}/>
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
