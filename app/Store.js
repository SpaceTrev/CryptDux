//importing the platform detection tool from react native used for dev tools
import { Platform } from 'react-native';

//imported functions from redux
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

//imports devtools
import devTools from 'remote-redux-devtools';

//middleware
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//importing RootReducer from reducers directory
import RootReducer from './Reducers';

//applying the redux-thunk, promise and logger with prebuilt redux function we imported and storing in a variable
const middleware = applyMiddleware( thunk, promise, logger);

// using the createStore we pass a reducer with the root reducer, which composes the middleware (enhancer??), and applys the dev tools with a preloaded state??
const Store = createStore(
    RootReducer,
    compose(
        middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        })
    )
);

//exports the store
export default Store;