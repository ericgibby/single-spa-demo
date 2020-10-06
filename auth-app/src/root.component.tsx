import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Callback from './components/Callback/Callback';
import Signin from './components/Signin/Signin';

const clientId = process.env.OAUTH_CLIENT_ID;

type RootProps = {
	name: string;
};

export default function Root(props: RootProps) {
	return (
		<ErrorBoundary fallback={<h1>Error!</h1>}>
			<AuthProvider clientId={clientId}>
				<BrowserRouter basename="/single-spa-demo">
					<Switch>
						<Route path="/auth/callback" component={Callback} />
						<Route path="/auth/signin" component={Signin} />
						<Redirect path="/auth" to="/auth/signin" />
					</Switch>
				</BrowserRouter>
			</AuthProvider>
		</ErrorBoundary>
	);
}
