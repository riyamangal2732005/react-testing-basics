import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders the button with the correct label', () => {
    render(<Button label="Click me"/>);

    // To look for the text on the screen, we write:
    const btnElement = screen.getByText(/click me/i);

    // confirmation(assertion)
    expect(btnElement).toBeInTheDocument();
});