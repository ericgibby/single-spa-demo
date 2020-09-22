import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpaLink from '../single-spa-link/single-spa-link.component';

type FourProps = {
	name?: string;
};

export default function Four({ name }: FourProps) {
	return (
		<>
			<h2>Four</h2>
			{name && <h3>{name}</h3>}
			<p>
				Intelligentsia health goth lyft woke. Tumblr mixtape celiac hot chicken hammock. Squid before they sold out meditation man
				braid distillery williamsburg vice messenger bag sustainable deep v. Glossier enamel pin vinyl photo booth. Bicycle rights
				dreamcatcher sustainable kale chips readymade. Keffiyeh franzen tumblr, small batch cray thundercats four loko asymmetrical
				waistcoat poutine taxidermy shaman gluten-free irony adaptogen.
			</p>
			<ul>
				<li>
					<SingleSpaLink to="/one">Go to One</SingleSpaLink>
				</li>
				<li>
					<SingleSpaLink to="/two">Go to Two</SingleSpaLink>
				</li>
				<li>
					<Link to="/three">Go to Three</Link>
				</li>
			</ul>
		</>
	);
}
