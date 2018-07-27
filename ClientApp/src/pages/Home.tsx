import * as React from 'react';
import {
    Jumbotron
} from 'reactstrap';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Home extends React.Component {
    render() {
        return (<main role="main">
            <Jumbotron>
                <h1 className="text-center">create-react-app-ts</h1>
            </Jumbotron>
            <div className="well" style={wellStyles}>
            </div>
        </main>);
    }
}

export default Home;