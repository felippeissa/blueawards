import React from 'react';
import Routes from './routes/routes';
import { StatusBar } from 'react-native'

function App() {
    console.disableYellowBox = true;
    return (
        <>
            <StatusBar style={{ backgroundColor: 'transparent', color: 'white' }} />
            <Routes />
        </>
    );
}

export default App;
