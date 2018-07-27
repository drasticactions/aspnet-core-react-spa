import * as React from 'react';
import { Navbar, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { AppState } from '../appState';

@inject('appState') @observer
class NavMenu extends React.Component<{appState?: AppState}, {}> {
    state: any;
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (<Navbar className="navbar navbar-dark fixed-top bg-dark" expand="md">
            <Link className="navbar-brand" to="/">React App</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            </Collapse>
        </Navbar>);
    }
}

export default NavMenu;