import {render, screen} from '@testing-library/react'
import {Question} from "./Question";
import * as test from "node:test";


test('it renders', () => {
    const question = {
        text: "What is your name?"
    }
    render(<Question item={question}/>);
    const element = screen.getByText(/what/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
})