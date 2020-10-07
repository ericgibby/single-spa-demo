import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
	token?: string;
};

const slice = createSlice({
	initialState: {} as AuthState,
	name: 'auth',
	reducers: {
		clearToken: state => {
			delete state.token;
		},
		tokenReceived: (state, { payload: token }) => {
			state.token = token;
		}
	}
});

export const { name, reducer } = slice;

export const { clearToken, tokenReceived } = slice.actions;
