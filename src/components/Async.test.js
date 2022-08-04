import { render, screen } from '@testing-library/react';

import Async from './Async';

describe('Async Component', () => {
	test('renders posts if request succeeds', async () => {
		window.fetch = jest.fn();
		window.fetch.mockResolvedValueOnce({
			json: async () => [{ id: 'p1', title: 'First Post' }],
		});
		render(<Async />);

		const liElements = await screen.findAllByRole('listitem');
		expect(liElements).not.toHaveLength(0);
	});
});
