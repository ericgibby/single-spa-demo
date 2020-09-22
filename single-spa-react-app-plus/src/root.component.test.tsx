import React from 'react';
import { render } from '@testing-library/react';
import Root from './root.component';

jest.mock('react-router-dom', () => {
	const { MemoryRouter } = jest.requireActual('react-router');
	return {
		...jest.requireActual('react-router-dom'),
		BrowserRouter: MemoryRouter
	};
});

describe('Root component', () => {
	it('should be in the document', () => {
		const { getAllByText } = render(<Root name="Testapp" />);
		expect(getAllByText(/Testapp/i).length).toBeGreaterThan(1);
	});
});
