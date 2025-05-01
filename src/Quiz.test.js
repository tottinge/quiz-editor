import {expect, it} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {Quiz} from "./Quiz";

it("renders a quiz with no questions", ()=>{
    render(<Quiz />)
    expect(screen.getByRole("heading")).toBeInTheDocument()
})

it("renders a quiz with questions", ()=>{
    render(<Quiz />)
})

it("can add a question", ()=>{})

it("can remove a question", ()=>{})

it("can open to edit a question", ()=>{})

it("can close to hide question details", ()=>{})

it("can move a question in the list", ()=>{})