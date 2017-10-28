/*
 *  Copyright (c) 2017.
 *  This  code file/snippet/block, including any other configuration files,
 *  is for the sole use of the Evive Health, LLC and may contain business
 *  confidential and privileged information.
 *  Any unauthorized review, use, disclosure or distribution is prohibited.
 */

import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './reducers/Reducers';


let middleware = [promise(), thunk];

export default createStore(reducer, applyMiddleware(...middleware));
