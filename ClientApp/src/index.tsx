import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AppState } from './appState';
import { InitialSetup } from './actions';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'mobx-history/createBrowserHistory';

declare var module: any;
const appState = new AppState();
InitialSetup(appState);
const browserHistory = createBrowserHistory();
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string;
const rootElement = document.getElementById('root');

const stores = {
    appState: appState
};

const render = Component => {
    ReactDOM.render(
        <Provider {...stores}>
            <BrowserRouter basename={baseUrl}>
                <App />
            </BrowserRouter>
        </Provider>,
        rootElement
    );
}
registerServiceWorker();

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    });
}
