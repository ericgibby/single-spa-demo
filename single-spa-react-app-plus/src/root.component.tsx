import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ErrorFallback from './components/error-fallback/error-fallback.component';
import Four from './components/four/four.component';
import Three from './components/three/three.component';

type RootProps = {
	name?: string;
};

export default function Root({ name }: RootProps) {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<header>
				<h1>{name}</h1>
			</header>
			<BrowserRouter basename="single-spa-demo/plus">
				<Switch>
					<Route path="/three">
						<Three name={name} />
					</Route>
					<Route path="/four">
						<Four name={name} />
					</Route>
					<Redirect path="*" to="/three" />
				</Switch>
			</BrowserRouter>
		</ErrorBoundary>
	);
}
