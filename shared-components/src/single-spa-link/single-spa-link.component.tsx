import React, { AnchorHTMLAttributes, ReactNode, SyntheticEvent } from 'react';
import { navigateToUrl } from 'single-spa';
import { useBase } from '../hooks/useBase';
import { useNgZone } from '../hooks/useNgZone';

type SingleSpaLinkProps = {
	children?: ReactNode;
	to: string;
	zone?: string;
};

export function SingleSpaLink({ children, to, zone = '', ...props }: SingleSpaLinkProps & AnchorHTMLAttributes<ReactNode>) {
	const base = useBase();
	const href = `${base}${to ? '/' + to.replace(/^\//, '') : ''}`;
	const ngZone = useNgZone(zone);

	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault();
		if (ngZone) {
			ngZone.runOutsideAngular(() => {
				navigateToUrl(href);
			});
		} else {
			navigateToUrl(href);
		}
	};

	return (
		<a {...props} href={href} onClick={handleClick}>
			{children}
		</a>
	);
}
