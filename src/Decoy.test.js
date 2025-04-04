import {DecoyList} from "./DecoyList";
import {render, screen} from "@testing-library/react";


it("renders an empty list of decoys", ()=> {
    render(<DecoyList/>)
    const title = screen.getByText(/decoys/i)
    expect(title).toBeInTheDocument()
    expect(title).toBeVisible()
})