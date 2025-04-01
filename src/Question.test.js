import {render, screen} from '@testing-library/react'
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