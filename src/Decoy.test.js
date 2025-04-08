// noinspection JSCheckFunctionSignatures

import {DecoyList} from "./DecoyList";
import {fireEvent, render, screen} from "@testing-library/react";
import { it, expect } from '@jest/globals';
import userEvent from "@testing-library/user-event";


it("renders an empty list of decoys", ()=> {
    render(<DecoyList/>)

    const title = screen.getByText(/decoys/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    expect(newItemField).toBeVisible()
})

it("renders a list of decoys", ()=> {
    render(<DecoyList decoys={["affirmative", "negative"]}/>)
    const decoys = screen.getAllByRole('listitem')
    expect(decoys).toHaveLength(3)
})

it("can add a decoy when users hit Enter", ()=> {
    const newDecoy = "affirmative"
    render(<DecoyList decoys={[]}/>)

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    userEvent.type(newItemField, newDecoy)
    userEvent.keyboard("{enter}")

    // expect one decoy and one input
    const decoys = screen.getAllByRole('listitem')
    expect(decoys).toHaveLength(2)

    console.log("Decoys are", decoys)
    const actual = decoys[0]
    console.log("Item acquired is", actual.innerHTML)
    expect(actual).toHaveTextContent(newDecoy)

})

it("can remove a decoy", ()=> {})
