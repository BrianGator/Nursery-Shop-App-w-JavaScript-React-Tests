/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Author: Brian McCarthy
 */

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
