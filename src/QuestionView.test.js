import {fireEvent, render, screen} from '@testing-library/react'
import {QuestionView} from "./QuestionView";
import { test, expect } from '@jest/globals';

test('it renders', () => {
    const text_question = {
        text: "What is your name?"
    }
    render(<QuestionView item={text_question}/>);
    const element = screen.getByDisplayValue(/what is your name/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
})

test('it renders with no content', () => {
    render(<QuestionView/>);
})

test('it handles text field updates', ()=> {
    const new_question_text = "What is your quest?"
    const old_question = {
        text: 'What is your name?'
    }
    render(<QuestionView item={old_question} />);
    const inputControl = screen.getByLabelText(/question/i)
    fireEvent.change(inputControl, {target: {value: new_question_text}})
    expect(inputControl.value).toBe(new_question_text)
})