import React from 'react';
import ReactDOM from 'react-dom';
// import App from "./components/App";
import './index.css';

function App(props) {
    return (
        <h1>{props.greeting} {props.userName}!!!</h1>
    );
}

function withGreeting(WrappedComponent) {
    return function WrappedComponentWithGreeting(greeting) {
        return function AppWrappedComponent(props) {
            return (
                <React.Fragment>
                    <WrappedComponent {...props} greeting={greeting}/>
                    <p>withGreeting p</p>
                </React.Fragment>
            );
        };
    }
}

const AppWithGreeting = withGreeting(App)('Hello');

ReactDOM.render(
    <AppWithGreeting userName='Mike'/>,
    document.getElementById('root')
);