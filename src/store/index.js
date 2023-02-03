import { configureStore } from "@reduxjs/toolkit";

import reducers from './reducer';

const store = configureStore({
    reducer: reducers
})

// const { dispatch } = store;

export { store };