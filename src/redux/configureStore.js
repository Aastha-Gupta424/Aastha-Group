import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { form } from './forms';


export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
          ...createForms({
            feedback: form
        })
      }),
      applyMiddleware(thunk)
    );

    return store;
}