import { Action, Store } from '@reduxjs/toolkit';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { ErrorFallback } from 'shared-components';
import NavBar from './components/NavBar/NavBar';

type RootProps = {
	name?: string;
	store?: Store;
	clearTokenAction?: () => Action;
};

export default function Root({ clearTokenAction, name, store }: RootProps) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Provider store={store}>
				<NavBar name={name} clearTokenAction={clearTokenAction} />
			</Provider>
		</ErrorBoundary>
	);
}
