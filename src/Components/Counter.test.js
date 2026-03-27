import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

test('increments the count when the button is clicked', () => {

    // Arrange
    render(<Counter/>);

    // find the elements
    const button = screen.getByText(/increment/i);
    const display = screen.getByTestId('counter-value');

    // check initial state
    expect(display.textContent).toBe("0");

    // Act(action: clicking the button)
    fireEvent.click(button);

    // assert: cheking if it changed to '1';
    expect(display.textContent).toBe("1");

    screen.debug();

});