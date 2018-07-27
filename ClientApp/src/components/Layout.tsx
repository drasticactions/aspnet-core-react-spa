import * as React from 'react';
import NavMenu from './NavMenu';
import '../App.css';

class Layout extends React.Component {
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
        return (
            <div>
                <NavMenu />
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
