import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import reducer from './reducers/reducer.js';
import {addBook} from './actions';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(logger));


store.dispatch(addBook({title: 'test', author: 'test', year: '1112', genere: 'Fantasy'}));

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
      document.getElementById('app')
    );
  });
}
