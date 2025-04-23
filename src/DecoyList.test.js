// noinspection JSCheckFunctionSignatures

import {DecoyList} from "./DecoyList";
import {render, screen, within} from "@testing-library/react";
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
    const decoys = getDecoys()
    expect(decoys).toHaveLength(2)
})

function getDecoys() {
    return screen.getAllByRole('listitem');
}

it("can add a decoy when users hit Enter", async ()=> {
    const decoyText = "pressed enter to add"
    render(<DecoyList decoys={[]}/>)

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    await userEvent.type(newItemField, decoyText)

    // expect one decoy and one input
    const decoys = getDecoys()
    expect(decoys).toHaveLength(1)
    expect(decoys[0]).toHaveTextContent(decoyText)
})

it("can add a decoy when users tab off the input field", ()=> {
    const decoyText = "Enter By Tabbing"
    render(<DecoyList decoys={[]}/>)

    const newItemField = screen.getByPlaceholderText(/new decoy/i)
    userEvent.type(newItemField, decoyText)
    userEvent.tab()

    // expect one decoy and one input
    const decoys = getDecoys()
    expect(decoys).toHaveLength(1)
    expect(decoys[0]).toHaveTextContent(decoyText)
})

it("can remove a decoy", ()=> {
    const decoyTerms = ["bleep","bloop","bing","brrrrap"]
    render(<DecoyList decoys={decoyTerms}/>)

    let liContainer = screen.getByText(/bloop/i)['parentElement'];
    const deleteButton = within(liContainer).getByRole('button')
    userEvent.click(deleteButton)

    expect(screen.getAllByRole("listitem")).toHaveLength(3)
    expect(screen.queryByText(/bloop/i)).toBeNull()
})
