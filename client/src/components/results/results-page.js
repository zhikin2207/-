import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import statisticsService from '../../api/statistics-service';
import * as statisticsSelectors from '../../utils/selectors/statistics-selectors';

class ResultsPage extends React.Component {
    componentWillMount() {
        statisticsService.set(this.props.letters);
    }

    render() {
        const totalSeconds = this.props.elapsedTicks / 1000;

        const combinations = statisticsSelectors
            .selectLetterCombinations(this.props.letters);

        combinations.sort((a,b) => {
            if (a.speed > b.speed) return -1;
            if (b.speed > a.speed) return 1;
            return 0;
        });

        return (
            <div>
                <h1>Here is gonna be results page</h1>
                {this.props.fixes.length} errors
                {' | '}
                {totalSeconds} elapsed
                {' | '}
                {Math.round(this.props.letters.length * 60 / totalSeconds)} cmp

                <hr />
                <Link to="/" className="btn btn-default">Restart</Link>

                <hr />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Combination</th>
                            <th>Speed</th>
                            <th>Errors</th>
                        </tr>
                    </thead>
                {
                    combinations.map(o => 
                        <tr>
                            <td>{o.value}</td>
                            <td>{o.speed} ms</td>
                            <td>{o.errors.map(e => <span>{e}</span>)}</td>
                        </tr>)
                }
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    fixes: state.typing.fixes,
    elapsedTicks: state.statistics.elapsedTicks,
    letters: state.statistics.letters,
    textName: state.typing.name
});

export default connect(mapStateToProps)(ResultsPage);
