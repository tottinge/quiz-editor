import {expect} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {Quiz} from "./Quiz";

it("renders a quiz with no questions", ()=>{
    render(<Quiz />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
})