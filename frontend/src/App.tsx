import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import { User } from './components/user/user';
import { Home } from './components/home/home';

function App() {
    return (
        <BrowserRouter>
            <div className={styles.App}>
                <header className={styles['App-header']}>
                    <User className={styles.navbar} />
                    <br />
                    <Home className={styles.Home} />
                </header>
            </div>
        </BrowserRouter>
    );
}

export default App;
