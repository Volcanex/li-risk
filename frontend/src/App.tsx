import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { Map } from './components/map/map';
import { User } from './components/user/user';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.App}>
        <header className={styles['App-header']}>
          <User className={styles.navbar} />
          <p>Risk test implementation.</p>
          <Map />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
