import {render, screen} from "@testing-library/react";
import TrendingVolume from "./TrendingVolume";
import '@testing-library/jest-dom'

test('render trending volume', () => {
    render(<TrendingVolume volume={143362067950.4293}/>)
    const element = screen.getByText('$143,362,067,950')

    expect(element).toBeInTheDocument()
})
