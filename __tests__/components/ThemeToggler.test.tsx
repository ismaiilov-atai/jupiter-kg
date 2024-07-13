import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { ThemeToggler } from '@/components/themeToogler';

import Test_renderer from '@/lib/TestRenderer';

describe('Theme toggling', () => {
	it('renders toggling button', () => {
		render(<Test_renderer element={<ThemeToggler />} />);
		const toggle = screen.getByLabelText('Toggle theme');
		expect(toggle).toBeInTheDocument();
	});

	it('should render appropriate parameter', () => {
		render(<Test_renderer element={<ThemeToggler />} />);
		const toggle = screen.getByLabelText('Toggle theme');

		expect(toggle).toHaveClass('rounded-[10px] ');
	});
});
