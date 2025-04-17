import {expect} from "@jest/globals";
import {render} from "@testing-library/react";
import {Quiz} from "./Quiz";

it("renders a quiz with no questions", ()=>{
    render(<Quiz />)
    expect(1).toBe(1);
})