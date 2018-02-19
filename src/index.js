import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import reducer from './reducers/reducer.js';
import {addBook} from './actions';

const store = createStore(reducer);
store.subscribe(() => console.log(store.getState()))

store.dispatch(addBook({title: 'aaa', author: 'bbb', year: '1112', genere: 'Fantasy'}));

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
