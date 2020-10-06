import React, { useEffect, useState } from 'react';
import { SingleSpaLink, useBase } from 'shared-components';

const navItems: { key: string; to: string; text: string; isDefault?: boolean }[] = [
	{ key: 'react', to: '/', text: 'React', isDefault: true },
	{ key: 'react-plus', to: '/plus', text: 'React+' },
	{ key: 'angular', to: '/ng', text: 'Angular' }
];

type NavBarProps = {
	name?: string;
};

export default function NavBar({ name }: NavBarProps) {
	const [activeNavItem, setActiveNavItem] = useState<string>();
	const base = useBase();

	useEffect(() => {
		const routingEventHandler = () => {
			const item = getActiveNavItem(window.location, base);
			setActiveNavItem(item);
		};
		routingEventHandler();
		window.addEventListener('popstate', routingEventHandler);
		return () => {
			window.removeEventListener('popstate', routingEventHandler);
		};
	}, [base]);

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container">
				<span className="navbar-brand">
					Header <small className="text-muted">{name}</small>
				</span>
				<ul className="navbar-nav">
					{navItems.map(({ key, to, text }) => (
						<li key={key} className="nav-item">
							<SingleSpaLink className={`nav-link${activeNavItem === key ? ' active' : ''}`} to={to}>
								{text}
							</SingleSpaLink>
						</li>
					))}
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item">
						<SingleSpaLink className="nav-link" to="/auth/signin">
							Sign in
						</SingleSpaLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

function getActiveNavItem(location: Location, baseUrl = '') {
	const path = location.pathname.replace(baseUrl, '');
	const item = navItems
		.filter(({ isDefault }) => !isDefault)
		.reduce((current, { key, to }) => (new RegExp(`^${to}`).test(path) ? key : current), '');
	return item || 'react';
}
