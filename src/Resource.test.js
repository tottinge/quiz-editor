import {Resource} from "./Resource";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";
import userEvent from "@testing-library/user-event";


const URL_FIELD_LABEL = /URL:/


// Utility/Helper functions
function getPreviewAnchorTag() {
    return screen.getByTitle(/open preview of resource/i);
}

function getDescriptionInput() {
    return screen.getByPlaceholderText(/description/i);
}

function expectAnchorDisabled(anchor) {
    return expect(anchor).toHaveStyle("pointer-events:none")
}


function getUrlInput() {
    return screen.getByLabelText(URL_FIELD_LABEL);
}

it("can render an empty resource", () => {
    render(<Resource/>);
    expect(getDescriptionInput()).toBeVisible();
    expect(getUrlInput()).toBeVisible();
});

it("can render a populated resource", () => {
    render(<Resource
        description="Jabberwocky, The Poem by Robert Lewis Stevenson"
        url="https://www.poetryfoundation.org/poems/42916/jabberwocky"
    />);
    expect(getDescriptionInput()).toBeVisible()
    expect(screen.getByDisplayValue(/poetryfoundation/i)).toBeVisible()

    const preview = getPreviewAnchorTag()
    expect(preview).toBeVisible();
    expect(preview.href).toContain("poetryfoundation.org");
});

it("can edit the description", () => {
    var new_description = "Jabberwocky, The Poem by Robert Lewis Stevenson";
    render(<Resource/>);

    const descriptionField = getDescriptionInput()
    userEvent.type(descriptionField, new_description)
    userEvent.keyboard("{enter}")
    expect(descriptionField.value).toBe(new_description)
});

it("can enter a valid URL", () => {
    const newUrl = "https://www.poetryfoundation.org/poems/42916/jabberwocky"
    render(<Resource/>);

    const urlField = getUrlInput()
    userEvent.type(urlField, newUrl)
    userEvent.keyboard("{enter}")

    const previewField = getPreviewAnchorTag()
    expect(previewField.href).toBe(newUrl)
})

it("show no preview link for an empty URL", () => {
    render(<Resource/>);
    const previewField = getPreviewAnchorTag()
    expectAnchorDisabled(previewField)
})

it("presents a preview link with valid url", () => {
    render(<Resource url="https://example.com/" description="" uuid=""/>);
    const previewTag = getPreviewAnchorTag()
    expect(previewTag.href).toBe("https://example.com/")
})

it("presents no preview link with invalid url", () => {
    render(<Resource url="no prefix no suffix" description="" uuid=""/>);
    expectAnchorDisabled(getPreviewAnchorTag())
})