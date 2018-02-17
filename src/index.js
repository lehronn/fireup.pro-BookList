import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import { createStore } from 'redux';
import reducer from './reducer.js';
import {addBook} from './actions';

const store = createStore(reducer);

store.dispatch(addBook('Title A', 'Author Z', '1967', 'Poems'));
store.dispatch(addBook('Title C', 'Author X', '1927', 'Fantasy'));
store.dispatch(addBook('Title B', 'Author Y', '1977', 'Poems'));

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
