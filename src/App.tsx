import styles from './App.module.scss';
import { Map } from './components/map/map';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles['App-header']}>
                <p>Risk test implementation.</p>
                <Map />
            </header>
        </div>
    );
}

export default App;
