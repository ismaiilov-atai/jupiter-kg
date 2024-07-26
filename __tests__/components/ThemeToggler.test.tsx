import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import ThemeToggler from '@/components/ThemeToggler';

import Test_renderer from '@/lib/TestRenderer';

describe('Theme toggling', () => {
	it('renders toggling button', () => {
		render(<ThemeToggler />);
		const toggle = screen.getByLabelText('Toggle theme');
		expect(toggle).toBeInTheDocument();
	});

	it('should render appropriate parameter', () => {
		render(<Test_renderer element={<ThemeToggler />} />);
		const toggle = screen.getByLabelText('Toggle theme');

		expect(toggle).toHaveAttribute('aria-pressed', 'false');
		fireEvent(toggle, new MouseEvent('click'));

		expect(toggle).not.toHaveAttribute('aria-pressed', 'true');
	});
});
