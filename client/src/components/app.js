import React, {PropTypes} from 'react';
import Menu from './common/menu';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Menu />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
