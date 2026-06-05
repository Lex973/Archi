import MainButton from "./MainButton";
import {fireEvent, render, screen} from "@testing-library/react";

test('render MainButton', () => {
    const active = 'Portfolio'
    const setActive = jest.fn()

    render(<MainButton active={active} setActive={setActive} children='Portfolio'/>)

    fireEvent.click(screen.getByText('Portfolio'));
    expect(setActive).toHaveBeenCalledTimes(1)
})