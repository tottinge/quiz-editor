import {fireEvent, render, screen} from '@testing-library/react'
import {QuestionView} from "./QuestionView";
import { test, expect } from '@jest/globals';

test('it renders', () => {
    const text_question = {
        text: "What is your age?",
        answer: "NYDB",
        confirmation: "This is personal information.",
        decoys: ["65", "49", "21", "older than my teeth"],
        resources: []
    }
    render(<QuestionView question={text_question}/>);
    const element = screen.getByLabelText(/Question To Ask/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
})

test('it renders with no content', () => {
    render(<QuestionView/>);
})

test('it handles text field updates', ()=> {
    const old_question = {
        text: 'What is your name?',
        question_id: "11111"
    }
    const mockUpdateParent = jest.fn();
    render(<QuestionView item={old_question} updateParent={mockUpdateParent}/>);

    const new_question_text = "What is your quest?"
    const inputControl = screen.getByLabelText(/question/i)
    fireEvent.change(inputControl, {target: {value: new_question_text}})

    // TODO: make this cascading function call work
    // expect(inputControl.value).toBe(new_question_text)
    // expect(mockUpdateParent).toHaveBeenCalledWith({
    //     text: new_question_text,
    //     question_id: "11111"
    // });
})