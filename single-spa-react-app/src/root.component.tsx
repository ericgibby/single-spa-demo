import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorFallback } from 'shared-components';

const One = lazy(() => import('./components/one/one.component'));
const Two = lazy(() => import('./components/two/two.component'));

type RootProps = {
	name?: string;
};

export default function Root({ name }: RootProps) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<header>
				<h1>
					React <small className="text-muted">{name}</small>
				</h1>
			</header>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter basename="single-spa-demo">
					<Switch>
						<Route path="/one" component={One} />
						<Route path="/two" component={Two} />
						<Redirect path="/" exact to="/one" />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</ErrorBoundary>
	);
}
