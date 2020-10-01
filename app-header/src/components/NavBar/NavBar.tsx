import React, { useEffect, useState } from 'react';
import { SingleSpaLink, useBase } from 'shared-components';

const navItems: { key: string; to: string; text: string }[] = [
	{ key: 'angular', to: '/ng', text: 'Angular' },
	{ key: 'react', to: '/', text: 'React' },
	{ key: 'react-plus', to: '/plus', text: 'React+' }
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
			</div>
		</nav>
	);
}

function getActiveNavItem(location: Location, baseUrl = '') {
	const item = navItems
		.filter(({ key }) => key !== 'react')
		.reduce((current, { key, to }) => {
			const path = location.pathname.replace(baseUrl, '');
			const regex = new RegExp(`^${to}`);
			const active = regex.test(path);
			if (active) {
				return key;
			}
			return current;
		}, '');
	return item || 'react';
}
