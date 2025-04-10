// noinspection JSCheckFunctionSignatures

import {ResourceList} from "./ResourceList";
import {render, screen, within} from "@testing-library/react";
import {expect, it} from '@jest/globals';
import userEvent from "@testing-library/user-event";

const inputResources = [
    ["The mother ship", "http://industriallogic.com/"],
    ["Jabberwocky", "https://www.poetryfoundation.org/poems/42916/jabberwocky"],
    ["React Guide", "https://reactjs.org/docs/getting-started.html"]
]

it("renders an empty list of resources", ()=> {
    render(<ResourceList/>)

    const title = screen.getByText(/resource list/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()

    const newItemField = screen.getByTitle("Add Resource")
    expect(newItemField).toBeVisible()

    const resourceHolder = screen.getByTitle("list of resources")
    expect(resourceHolder).toBeEmpty()
})

it("renders a non-empty list of resources", ()=> {
    render(<ResourceList resources={inputResources}/>)

    const resourceHolder = screen.getAllByRole("listitem")
    expect(resourceHolder).toHaveLength(3)
})

it("can add a resource", ()=> {

})



it("can remove a resource", ()=> {

})
