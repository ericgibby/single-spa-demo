import React from 'react';
import { Link } from 'react-router-dom';
import { SingleSpaLink } from 'shared-components';

type ThreeProps = {
	name?: string;
};

export default function Three({ name }: ThreeProps) {
	return (
		<>
			<h2>Three</h2>
			{name && <h3>{name}</h3>}
			<p>
				Normcore chartreuse mumblecore, slow-carb banjo vice hot chicken cold-pressed raw denim gastropub 90's swag jianbing.
				Raclette twee austin taiyaki, seitan tbh whatever. Yr tbh wolf, health goth beard chia flannel. Stumptown keffiyeh
				single-origin coffee locavore mlkshk chia fingerstache. Four loko twee distillery ramps tofu, glossier humblebrag hella. Pug
				lyft heirloom, gochujang pop-up vexillologist austin seitan cronut cold-pressed bitters echo park post-ironic la croix
				mumblecore.
			</p>
			<ul>
				<li>
					<SingleSpaLink to="/single-spa-demo/one">Go to One</SingleSpaLink>
				</li>
				<li>
					<SingleSpaLink to="/single-spa-demo/two">Go to Two</SingleSpaLink>
				</li>
				<li>
					<Link to="/four">Go to Four</Link>
				</li>
			</ul>
		</>
	);
}
