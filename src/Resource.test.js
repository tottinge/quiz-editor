// noinspection JSCheckFunctionSignatures

import {ResourceList} from "./ResourceList";
import {render, screen} from "@testing-library/react";
import {expect, it} from '@jest/globals';
import userEvent from "@testing-library/user-event";


it("renders an empty list of resources", ()=> {
    render(<ResourceList/>)

    const title = screen.getByText(/resource list/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()

    const newItemField = screen.getByPlaceholderText(/resource link/i)
    expect(newItemField).toBeVisible()
})

it("renders a non-empty list of resources", ()=> {
    render(<ResourceList resources={["affirmative", "negative"]}/>)
    const resources = screen.getAllByRole('listitem')
    expect(resources).toHaveLength(3)
})

it("can add a resource when users hit Enter", ()=> {
    const resourceText = "pressed enter to add"
    render(<ResourceList resources={[]}/>)

    const newItemField = screen.getByPlaceholderText(/resource link/i)
    userEvent.type(newItemField, resourceText)
    userEvent.keyboard("{enter}")

    // expect one resource and one input
    const resources = screen.getAllByRole('listitem')
    expect(resources).toHaveLength(2)
    expect(resources[0]).toHaveTextContent(resourceText)
})

it("can add a resource when users tab off the input field", ()=> {
    const resourceText = "Enter By Tabbing"
    render(<ResourceList resources={[]}/>)

    const newItemField = screen.getByPlaceholderText(/resource link/i)
    userEvent.type(newItemField, resourceText)
    userEvent.tab()

    // expect one resource and one input
    const resources = screen.getAllByRole('listitem')
    expect(resources).toHaveLength(2)
    expect(resources[0]).toHaveTextContent(resourceText)
})

it("can remove a resource", ()=> {})
