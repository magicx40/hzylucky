import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducerSlices/countSlices';

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});