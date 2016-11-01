import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as typingActions from '../../actions/typing-actions';
import * as statisticsActions from '../../actions/statistics-actions';
import GamePanel from './panels/game-panel';
import TypingStatistics from './typing/typing-statistics';
import Timer from '../../utils/timer.js';

class GamePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.updateTimer = this.updateTimer.bind(this);
        this.onTypingCompleted = this.onTypingCompleted.bind(this);
        this.onTypingStarted = this.onTypingStarted.bind(this);

        this.timer = new Timer(this.updateTimer, 60);

        this.state = { ticks: 0 };
    }

    componentWillMount() {
        this.props.statistics.reset();
        this.props.typing.loadTopWords();
    }

    componentWillUnmount() {
        this.timer.stop();
    }

    updateTimer() {
        this.setState({
            ticks: this.timer.elapsedTicks
        });
    }

    onTypingStarted() {
        if (!this.timer.started) {
            this.timer.start();
        }
    }

    onTypingCompleted() {
        this.timer.stop();
        this.props.statistics.setElapsedTicks(this.timer.elapsedTicks);
        this.context.router.push('/results');
    }

    render() {
        return (
            <div className="container">
                <GamePanel 
                    typingStarted={this.onTypingStarted}
                    typingCompleted={this.onTypingCompleted} />
                <TypingStatistics 
                    elapsedTicks={this.state.ticks}
                    lettersCount={this.props.inputText.length}
                    errorsCount={this.props.fixes.length} />
            </div>
        );
    }
}

GamePage.contextTypes = {
    router: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => ({
    inputText: state.typing.inputText,
    fixes: state.typing.fixes,
    elapsedTicks: state.statistics.elapsedTicks
});

const mapDispatchToProps = (dispatch) => ({
    typing: bindActionCreators(typingActions, dispatch),
    statistics: bindActionCreators(statisticsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
