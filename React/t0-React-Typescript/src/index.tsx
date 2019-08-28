// Main Module Imports
import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Render to Window
render(<App />, document.getElementById("root"));

// Register Service Worker
registerServiceWorker();