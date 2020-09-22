import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpaLink from '../single-spa-link/single-spa-link.component';

type OneProps = {
	name?: string;
};

export default function One({ name }: OneProps) {
	return (
		<>
			<h2>One</h2>
			{name && <h3>{name}</h3>}
			<p>
				Photo booth mustache truffaut, af crucifix prism mlkshk venmo gochujang four dollar toast. Pork belly actually bushwick,
				gentrify semiotics tote bag humblebrag vape. Squid succulents wolf plaid, seitan shabby chic keytar asymmetrical health goth
				marfa williamsburg fanny pack mixtape brooklyn bespoke. Raw denim umami gastropub butcher salvia unicorn polaroid meggings
				viral subway tile yr pitchfork kombucha.
			</p>
			<ul>
				<li>
					<Link to="/two">Go to Two</Link>
				</li>
				<li>
					<SingleSpaLink to="/plus/three">Go to Three</SingleSpaLink>
				</li>
				<li>
					<SingleSpaLink to="/plus/four">Go to Four</SingleSpaLink>
				</li>
			</ul>
		</>
	);
}
