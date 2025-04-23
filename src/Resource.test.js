import {Resource} from "./Resource";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";
import userEvent from "@testing-library/user-event";


// Utility/Helper functions
function getPreviewAnchorTag() {
    return screen.getByRole('link', {name:/preview in new tab/i})
}

function getDescriptionInput() {
    return screen.getByRole("textbox", {name: /text/i})
}

function getUrlInput() {
    return screen.getByRole("textbox", {name: /URL:/i});
}

function expectAnchorDisabled(anchor) {
    // An anchor isn't disabled per-se, rather its pointer-events are turned off
    return expect(anchor).toHaveStyle("pointer-events:none")
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
    expect(preview.getAttribute('href')).toContain("poetryfoundation.org");
});

it("can edit the description", async () => {
    const new_description = "Jabberwocky, The Poem by Robert Lewis Stevenson";
    render(<Resource/>);

    const descriptionField = getDescriptionInput()
    await userEvent.type(descriptionField, new_description)
    // await userEvent.keyboard("{enter}")

    const actual = await getDescriptionInput();
    expect(actual).toHaveValue(new_description)
});

it("can enter a valid URL", async () => {
    const newUrl = "https://www.poetryfoundation.org/poems/42916/jabberwocky"
    render(<Resource/>);

    const urlField = getUrlInput()
    await userEvent.type(urlField, newUrl)

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