import { createStore } from 'redux';
import reducers from '../reducers/reducers';

const store = createStore(reducers);

store.subscribe(() => {
	console.log('có sự thay đổi redux');
});

export default store;
