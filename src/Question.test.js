import {fireEvent, render, screen} from '@testing-library/react'
import {Question} from "./Question";


test('it renders', () => {
    const text_question = {
        text: "What is your name?"
    }
    render(<Question item={text_question}/>);
    const element = screen.getByDisplayValue(/what/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
})

test('it renders with no content', () => {
    render(<Question/>);
})

test('it handles text field updates', ()=> {
    const new_question_text = "What is your quest?"
    const old_question = {
        text: 'What is your name?'
    }
    render(<Question item={old_question} />);
    const inputControl = screen.getByLabelText('Question')
    fireEvent.change(inputControl, {target: {value: new_question_text}})
    expect(inputControl.value).toBe(new_question_text)
})