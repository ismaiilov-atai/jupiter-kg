import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Page from '@/app/[lang]/page';
import Test_renderer from '@/lib/TestRenderer';

describe('Page', () => {
	it('renders a heading', () => {
		render(<Test_renderer element={<Page />} />);

		const heading = screen.getByRole('heading', { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});
