import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3>15 Words</h3>
                            <p>...</p>
                            <p>
                                <Link to="/game" className="btn btn-primary" role="button">Start</Link> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
