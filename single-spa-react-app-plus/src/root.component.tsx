import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ErrorFallback } from 'shared-components';
import Four from './components/four/four.component';
import Three from './components/three/three.component';

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
			<BrowserRouter basename="/single-spa-demo">
				<Switch>
					<Route path="/plus/three" component={Three} />
					<Route path="/plus/four" component={Four} />
					<Redirect path="/plus" to="/plus/three" />
				</Switch>
			</BrowserRouter>
		</ErrorBoundary>
	);
}
