import { createStore } from 'redux';

import rootReducer from'./modules/rootReducer';

const enhacer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

const Store = createStore(rootReducer, enhacer);

export default Store;