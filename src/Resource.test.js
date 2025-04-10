import {Resource} from "./Resource";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";
import userEvent from "@testing-library/user-event";

const defaultPreviewUrl = "http://localhost/logo192.png"

it("can render an empty resource", () => {
    render(<Resource />);

    expect(screen.getByPlaceholderText(/description/i)).toBeVisible();
    expect(screen.getByPlaceholderText(/url/i)).toBeVisible();

    let previewFrame = screen.getByTitle(/preview of/i);
    expect(previewFrame).toBeVisible();
    expect(previewFrame.src).toContain(defaultPreviewUrl);
});


it("can render a populated resource", () => {
    render(<Resource
        description="Jabberwocky, The Poem by Robert Lewis Stevenson"
        url="https://www.poetryfoundation.org/poems/42916/jabberwocky"
    />);
    expect(screen.getByDisplayValue(/the poem by/i)).toBeVisible()
    expect(screen.getByDisplayValue(/poetryfoundation/i)).toBeVisible()

    const preview = screen.getByTitle(/preview of/i)
    expect(preview).toBeVisible();
    expect(preview.src).toContain("poetryfoundation.org");
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
    const previewField = screen.getByTitle(/preview of/i)
    expect(previewField.src).toBe(newUrl)
})

it("substitutes a default preview for an invalid url", ()=>{
    render(<Resource />);

    const descriptionField = screen.getByLabelText(/url:/i)
    userEvent.type(descriptionField, "invalid")

    const previewField = screen.getByTitle(/preview of/i)
    expect(previewField.src).toBe(defaultPreviewUrl)
})