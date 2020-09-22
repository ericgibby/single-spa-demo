import React from 'react';
import { Link } from 'react-router-dom';
import SingleSpaLink from '../single-spa-link/single-spa-link.component';

type TwoProps = {
	name?: string;
};

export default function Two({ name }: TwoProps) {
	return (
		<>
			<h2>Two</h2>
			{name && <h3>{name}</h3>}
			<p>
				Polaroid YOLO subway tile beard kickstarter, offal taiyaki kombucha. Kitsch jean shorts cred distillery ennui subway tile
				cronut listicle typewriter fanny pack unicorn mlkshk mustache vegan chambray. Kombucha palo santo unicorn mustache. Narwhal
				vaporware distillery fingerstache bushwick forage knausgaard microdosing. Vaporware mlkshk lo-fi organic. Hexagon cloud
				bread austin kickstarter, letterpress mumblecore skateboard truffaut marfa bespoke. Blue bottle williamsburg cred la croix
				viral, craft beer butcher hella normcore.
			</p>
			<ul>
				<li>
					<Link to="/one">Go to One</Link>
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
