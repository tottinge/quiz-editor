// noinspection JSCheckFunctionSignatures

import {DecoyList} from "./DecoyList";
import {render, screen} from "@testing-library/react";
import {expect, it} from '@jest/globals';
import userEvent from "@testing-library/user-event";


it("renders an empty list of decoys", ()=> {
    render(<DecoyList/>)

    const title = screen.getByText(/decoys/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    expect(newItemField).toBeVisible()
})

it("renders a non-empty list of decoys", ()=> {
    render(<DecoyList decoys={["affirmative", "negative"]}/>)
    const decoys = screen.getAllByRole('listitem')
    expect(decoys).toHaveLength(3)
})

it("can add a decoy when users hit Enter", ()=> {
    const decoyText = "pressed enter to add"
    render(<DecoyList decoys={[]}/>)

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    userEvent.type(newItemField, decoyText)
    userEvent.keyboard("{enter}")

    // expect one decoy and one input
    const decoys = screen.getAllByRole('listitem')
    expect(decoys).toHaveLength(2)
    expect(decoys[0]).toHaveTextContent(decoyText)
})

it("can add a decoy when users tab off the input field", ()=> {
    const decoyText = "Enter By Tabbing"
    render(<DecoyList decoys={[]}/>)

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    userEvent.type(newItemField, decoyText)
    userEvent.tab()

    // expect one decoy and one input
    const decoys = screen.getAllByRole('listitem')
    expect(decoys).toHaveLength(2)
    expect(decoys[0]).toHaveTextContent(decoyText)
})

it("can remove a decoy", ()=> {})
