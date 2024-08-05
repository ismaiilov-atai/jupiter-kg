'use client';

import React from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html>
			<body>
				<h2>Something went wrong global!</h2>
				<button onClick={() => reset()}>Try again</button>
			</body>
		</html>
	);
}
