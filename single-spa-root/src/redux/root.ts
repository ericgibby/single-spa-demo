import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authReducer, name as authName } from './modules/auth.module';

const rootReducer = combineReducers({
	[authName]: authReducer
});

export default rootReducer;
