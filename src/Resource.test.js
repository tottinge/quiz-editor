import {Resource} from "./Resource";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";

it("can render an empty resource", () => {
    render(<Resource />);

    expect(screen.getByLabelText(/description/i)).toBeVisible();
    expect(screen.getByLabelText(/url/i)).toBeVisible();
});


it("can render a populated resource", () => {
    render(<Resource
        description="Jabberwocky, The Poem by Robert Lewis Stevenson"
        url="https://www.poetryfoundation.org/poems/42916/jabberwocky"
    />);
    expect(screen.getByDisplayValue(/the poem by/i)).toBeVisible()
    expect(screen.getByDisplayValue(/poetryfoundation/i)).toBeVisible()
});

it("can edit the description", () => {});
it("can enter a valid URL", ()=>{})