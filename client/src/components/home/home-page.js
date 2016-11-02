import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-4">
                    <h2>Learn:</h2>

                    <div className="thumbnail">
                        <div className="caption">
                            <h3>To be continued</h3>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <h2>Train:</h2>

                    <div className="thumbnail">
                        <div className="caption">
                            <h3>15 Words</h3>
                            <p>15 words from top 1000 frequent words</p>
                            <p>
                                <Link to="/game" className="btn btn-primary" role="button">Start</Link> 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <h2>Challenge:</h2>

                    <div className="thumbnail">
                        <div className="caption">
                            <h3>To be continued</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
