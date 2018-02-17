import { combineReducers } from 'redux';
import books from './components/Books.js';

//łączenie reducerów,gdyby się przydały dodatkowe.

const reducer = combineReducers({
	books,
});

export default reducer;
