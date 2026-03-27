import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

test('updates the search input when a user types', () => {

    // Arrange (rendering the component)
    render(<SearchInput placeholder="Search flowers..."/>)

    // finding the input
    const inputElement = screen.getByPlaceholderText(/search flowers.../i);   

    // act(an action)
    fireEvent.change(inputElement, { target: { value: 'Lavender' } });

    screen.debug();

    // assertion
    expect(inputElement.value).toBe('Lavender');
});