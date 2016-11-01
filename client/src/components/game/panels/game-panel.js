import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SmartTypingPanel from './smart-typing-panel';
import * as typingUtils from '../../../utils/typing-utils';
import * as typingActions from '../../../actions/typing-actions';
import * as statisticsActions from '../../../actions/statistics-actions';

class GamePanel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onTextInput = this.onTextInput.bind(this);
    }

    onTextInput(event) {
        const inputText = event.target.value;
        const validationResult = typingUtils.validateInput(
            inputText,
            this.props.inputText,
            this.props.initialText,
            this.props.errorIndex);

        switch(validationResult.mode) {
            case 'NO_ERROR':
                this.props.typing.setCorrectInput(inputText);
                break;
            case 'ERROR_CONTINUED':
                this.props.typing.setCorrectInput(inputText);
                break;
            case 'ERROR_MADE':
                this.props.typing.setError(
                    inputText[validationResult.errorIndex],
                    validationResult.errorIndex);
                this.props.typing.setInput(inputText);
                break;
            case 'ERROR_REMOVED':
                this.props.typing.clearError();
                this.props.typing.setInput(inputText);
                break;
        }
    }

    render() {
        return (
            <SmartTypingPanel 
                initialText={this.props.initialText}
                inputText={this.props.inputText}
                fixes={this.props.fixes}
                errorIndex={this.props.errorIndex}
                cursorIndex={this.props.cursorIndex}
                onTextInput={this.onTextInput}
                onInputStarted={this.props.typingStarted}
                onInputCompleted={this.props.typingCompleted} />
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    initialText: state.typing.initialText,
    inputText: state.typing.inputText,
    fixes: state.typing.fixes,
    errorIndex: state.typing.errorIndex,
    cursorIndex: state.typing.cursorIndex
});

const mapDispatchToProps = (dispatch) => ({
    typing: bindActionCreators(typingActions, dispatch),
    statistics: bindActionCreators(statisticsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePanel);
