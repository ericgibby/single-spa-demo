import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from 'shared-components';
import NavBar from './components/NavBar/NavBar';

type RootProps = {
	name?: string;
};

export default function Root({ name }: RootProps) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<NavBar name={name} />
		</ErrorBoundary>
	);
}
