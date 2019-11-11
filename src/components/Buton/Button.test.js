import React from 'react'
import { render, getByText, fireEvent } from '@testing-library/react'
import Button from './Button'

describe("Button", () => {
    const onClickMock = jest.fn();

    test("should display text", () => {
        const expectedText = "Enter Now!"
        const { container } = render(<Button text="Enter Now!" />);

        getByText(container, expectedText);
    });

    test("should handle click event", () => {
        const { container } = render(
            <Button text="Now, Click me" onClick={onClickMock} />
        );
        const component = container.firstChild;
        fireEvent.click(component);

        expect(onClickMock).toBeCalled();
    });

    test("should make text uppercase", () => {
        const { container } = render(<Button text="i should be uppercase" />);
        const component = getByText(container, "i should be uppercase");

        expect(component).toHaveStyleRule("text-transform", "uppercase");
    })
})