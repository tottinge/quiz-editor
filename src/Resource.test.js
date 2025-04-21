import {Resource} from "./Resource";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";
import userEvent from "@testing-library/user-event";

const defaultPreviewUrl = "http://localhost/logo192.png"

const PREVIEW_ANCHOR_TITLE = /open preview of resource/i
const URL_FIELD_LABEL = /URL:/

function expectAnchorDisabled(anchor) {
    return expect(anchor).toHaveStyle("pointer-events:none")}

it("can render an empty resource", () => {
    render(<Resource />);

    expect(screen.getByPlaceholderText(/description/i)).toBeVisible();
    expect(screen.getByLabelText(URL_FIELD_LABEL)).toBeVisible();

});

it("can render a populated resource", () => {
    render(<Resource
        description="Jabberwocky, The Poem by Robert Lewis Stevenson"
        url="https://www.poetryfoundation.org/poems/42916/jabberwocky"
    />);
    expect(screen.getByDisplayValue(/the poem by/i)).toBeVisible()
    expect(screen.getByDisplayValue(/poetryfoundation/i)).toBeVisible()

    const preview = screen.getByTitle(PREVIEW_ANCHOR_TITLE)
    expect(preview).toBeVisible();
    expect(preview.href).toContain("poetryfoundation.org");
});

it("can edit the description", () => {
    render(<Resource />);
    const descriptionField = screen.getByLabelText(/text:/i)
    var new_description = "Jabberwocky, The Poem by Robert Lewis Stevenson";
    userEvent.type(descriptionField, new_description)
    userEvent.keyboard("{enter}")
    expect(descriptionField.value).toBe(new_description)
});

it("can enter a valid URL", ()=>{
    render(<Resource />);
    const newUrl = "https://www.poetryfoundation.org/poems/42916/jabberwocky"
    const descriptionField = screen.getByLabelText(/url:/i)
    userEvent.type(descriptionField, newUrl)
    userEvent.keyboard("{enter}")

    const previewField = screen.getByTitle(PREVIEW_ANCHOR_TITLE)
    expect(previewField.href).toBe(newUrl)
})

it("show no preview link for an empty URL", ()=>{
    render(<Resource />);
    const previewField = screen.getByTitle(PREVIEW_ANCHOR_TITLE)
    expectAnchorDisabled(previewField)
})

it("presents a preview link with valid url", ()=>{
    render(<Resource url="http://example.com/" description="" uuid=""  />);
    const previewFields = screen.getAllByTitle(PREVIEW_ANCHOR_TITLE)
    expect(previewFields).toHaveLength(1)
    expect(previewFields[0].href).toBe("http://example.com/")
})

it("presents no preview link with invalid url", ()=>{
    render(<Resource url="no prefix no suffix" description="" uuid=""  />);

    const previewAnchor = screen.getByTitle(PREVIEW_ANCHOR_TITLE)
    expectAnchorDisabled(previewAnchor)
})