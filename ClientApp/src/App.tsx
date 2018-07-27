import * as React from 'react';
import './App.css';
import { inject, observer } from '../node_modules/mobx-react';
import { Route, withRouter, RouteComponentProps } from 'react-router';
import { AppState } from './appState';
import Layout from './components/Layout';
import Home from './pages/Home';

type PathParamsType = {
  param1: string,
}

// Your component own properties
type PropsType = RouteComponentProps<PathParamsType> & {
  appState?: AppState,
}

@inject('appState') @observer
class App extends React.Component<PropsType> {
  public render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
      </Layout>
    );
  }
}

export default withRouter(App);
