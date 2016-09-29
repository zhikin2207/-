import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

// TODO: Remove from prod build
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk, reduxImmutableStateInvariant()),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
