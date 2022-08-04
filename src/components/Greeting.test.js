import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting />', () => {
	test('renders Hello World as a text', () => {
		// Arrange
		render(<Greeting />);

		//Act
		//...Nothing

		//Assert
		const helloWorldElement = screen.getByText('Hello World', { exact: false });
		expect(helloWorldElement).toBeInDocument();
	});

	test('renders good to see you !clicked', () => {
		// Arrange
		render(<Greeting />);

		//Assert
		const pElement = screen.getByText('good to see you', { exact: false });
		expect(pElement).toBeInDocument();
	});

	test('render Changed! if button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const pElement = screen.getByText('Changed!', { exact: false });
		expect(pElement).toBeInDocument();
	});

	test('does not render good to see you if button was clicked', () => {
		// Arrange
		render(<Greeting />);

		// Act
		const buttonElement = screen.getByRole('button');
		userEvent.click(buttonElement);

		//Assert
		const pElement = screen.queryByText('good to see you', { exact: false });
		expect(pElement).toBeNull();
	});
});
