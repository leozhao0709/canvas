import * as React from 'react';
import { Canvas } from './container/Canvas/Canvas';
import { Sidebar } from './container/Sidebar/Sidebar';
import * as styles from './App.css';

class App extends React.Component {
    public render() {
        return (
            <div className={styles.app}>
                <Sidebar />
                <Canvas />
            </div>
        );
    }
}

export default App;
