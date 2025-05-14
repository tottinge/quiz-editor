import {expect, it} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import {QuizView} from "./QuizView";

it("renders a quiz with no questions", ()=>{
    render(<QuizView />)
    expect(screen.getByRole("heading", {name:/Quiz/})).toBeInTheDocument()
})

it("renders a quiz with questions", ()=>{
    render(<QuizView />)
})

it("can add a question", ()=>{})

it("can remove a question", ()=>{})

it("can open to edit a question", ()=>{})

it("can close to hide question details", ()=>{})

it("can move a question in the list", ()=>{})