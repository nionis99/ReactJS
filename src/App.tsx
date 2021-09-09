import React from 'react';
import Body from "./components/body";
import Header from './components/header';
import Heading from "./components/Heading";
import './styles/App.css';

const App = () => (
    <Body>
        <Header>
            <Heading title="Hello world" subtitle="this is reactjs course"/>
        </Header>
    </Body>
);

export default App;
