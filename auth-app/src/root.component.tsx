import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Action, Store } from 'redux';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Callback from './components/Callback/Callback';
import Signin from './components/Signin/Signin';

const clientId = process.env.OAUTH_CLIENT_ID;

type RootProps = {
	name: string;
	store?: Store;
	tokenReceivedAction?: (token: string) => Action;
};

export default function Root({ store, tokenReceivedAction }: RootProps) {
	const handleTokenReceived = (token: string) => store?.dispatch(tokenReceivedAction?.(token));
	return (
		<ErrorBoundary fallback={<h1>Error!</h1>}>
			<AuthProvider clientId={clientId}>
				<Provider store={store}>
					<BrowserRouter basename="/single-spa-demo">
						<Switch>
							<Route path="/auth/callback">
								<Callback onTokenReceived={handleTokenReceived} />
							</Route>
							<Route path="/auth/signin" component={Signin} />
							<Redirect path="/auth" to="/auth/signin" />
						</Switch>
					</BrowserRouter>
				</Provider>
			</AuthProvider>
		</ErrorBoundary>
	);
}
