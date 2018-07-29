//Library imports
import React from 'react';
import ReactDOM from 'react-dom';

//Component imports
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
