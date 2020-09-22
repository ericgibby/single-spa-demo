import React from 'react';

type ErrorFallbackProps = { error?: Error };

export default function ErrorFallback({ error }: ErrorFallbackProps) {
	return (
		<div>
			<p>Something when wrong:</p>
			<pre style={{ color: 'red' }}>{error.message}</pre>
		</div>
	);
}
