import React, { AnchorHTMLAttributes, ReactNode, SyntheticEvent } from 'react';
import { navigateToUrl } from 'single-spa';

type SingleSpaLinkProps = {
	children?: ReactNode;
	to: string;
};

export default function SingleSpaLink({ children, to, ...props }: SingleSpaLinkProps & AnchorHTMLAttributes<ReactNode>) {
	const handleClick = (e: SyntheticEvent) => {
		e.preventDefault();
		navigateToUrl(to);
	};

	return (
		<a {...props} href={to} onClick={handleClick}>
			{children}
		</a>
	);
}
