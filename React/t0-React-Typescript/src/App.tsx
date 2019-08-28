// Main Module Imports
import * as React from 'react';

// Component Imports
import Message from './Components/Message';

// Style Imports
import './Styles/App.css';

// Image Imports
const image = require('./Assets/React-Logo.svg');

/**
 * Main Intefaces
 *  - Prop and State Types used
 */
interface props {};
interface state {};

/**
 * Main App Class
 */
export default class App extends React.Component<props, state> {
    render() {
        return (
            <Message message="Welcome to React" src={image} />
        );
    }
}