import React from 'react';
import {connect} from 'react-redux'

export default function(ComposedComponent) {
    class Authentication extends React.Component {
        componentWillMount() {
            if (!this.props.authenticated) {
                this.context.router.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.context.router.push('/signin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    Authentication.contextTypes = {
        router: React.PropTypes.object
    };

    const mapStateToProps = (state) => ({
            authenticated: state.auth.authenticated
    });

    return connect(mapStateToProps)(Authentication);
}
