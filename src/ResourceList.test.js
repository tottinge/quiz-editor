// noinspection JSCheckFunctionSignatures

import {ResourceListView} from "./ResourceListView";
import {render, screen, within} from "@testing-library/react";
import {expect, it} from '@jest/globals';
import userEvent from "@testing-library/user-event";

const inputResources = [
    {description:"The mother ship", url:"http://industriallogic.com/", uuid: "mother" },
    {description:"Jabberwocky Poem", url:"https://www.poetryfoundation.org/poems/42916/jabberwocky", uuid: "jabberwocky" },
    {description:"React Guide", url:"https://reactjs.org/docs/getting-started.html", uuid: "react" },
]

function getListItems() {
    return screen.getAllByRole("listitem");
}

it("renders an empty list of resources", ()=> {
    render(<ResourceListView/>)

    const title = screen.getByText(/resource list/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()

    const newItemField = screen.getByTitle("Add Resource")
    expect(newItemField).toBeVisible()

    const resourceHolder = screen.getByTitle("list of resources")
    expect(resourceHolder).toBeEmptyDOMElement()
})

it("renders a non-empty list of resources", ()=> {
    render(<ResourceListView resources={inputResources}/>)

    expect(getListItems()).toHaveLength(3)
})

it("can add a resource", ()=> {
    render(<ResourceListView/>)
    const add_button = screen.getByTitle("Add Resource")
    userEvent.click(add_button)
    expect(getListItems()).toHaveLength(1)
})

it("can remove a resource", ()=> {
    const patternForDescriptionText = /Title for recommended reading/i;
    const allDescriptions = inputResources.map((resource) => resource.description);

    render(<ResourceListView resources={inputResources}/>)

    const itemsBefore = screen
        .getAllByTitle(patternForDescriptionText)
        .map(item => item.value);
    expect(itemsBefore).toEqual(allDescriptions);

    var secondListItem = getListItems()[1];
    const deleteButton = within(secondListItem).getByRole("button")
    userEvent.click(deleteButton)

    const itemsAfter = screen
        .getAllByTitle(patternForDescriptionText).map(item => item.value)
    expect(itemsAfter).toEqual([
        allDescriptions[0],
        allDescriptions[2]
    ])
})
