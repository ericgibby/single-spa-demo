import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const One = lazy(() => import('./components/one/one.component'));
const Two = lazy(() => import('./components/two/two.component'));
const ErrorFallback = lazy(() => import('./components/error-fallback/error-fallback.component'));

type RootProps = {
	name?: string;
};

export default function Root({ name }: RootProps) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<header>
				<h1>{name}</h1>
			</header>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Switch>
						<Route path="/one">
							<One name={name} />
						</Route>
						<Route path="/two">
							<Two name={name} />
						</Route>
						<Redirect path="*" to="/one" />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}
