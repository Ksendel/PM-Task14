import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import photos from "../ducks/getPhotos";

const rootReducer = combineReducers({
    photos
})

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

        }) : compose

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
