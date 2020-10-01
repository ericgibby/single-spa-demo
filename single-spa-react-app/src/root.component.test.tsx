import React from 'react';
import { render } from '@testing-library/react';
import Root from './root.component';

jest.mock('react-router-dom', () => {
	const { MemoryRouter: BrowserRouter } = jest.requireActual('react-router');
	return {
		...jest.requireActual('react-router-dom'),
		BrowserRouter
	};
});

describe('Root component', () => {
	it('should be in the document', () => {
		const { getByText } = render(<Root name="Testapp" />);
		expect(getByText(/Testapp/i)).toBeInTheDocument();
	});
});
