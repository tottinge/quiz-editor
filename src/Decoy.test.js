// noinspection JSCheckFunctionSignatures

import {DecoyList} from "./DecoyList";
import {render, screen} from "@testing-library/react";
import { it, expect } from '@jest/globals';


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