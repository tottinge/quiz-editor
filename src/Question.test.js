import {render, screen} from '@testing-library/react'



// const resources = [
//     {
//         text: "text",
//         url: "https://example.com"
//     }
// ]

// const question = {
//     text: 'This is my question'
//     // answer: text
//     // decoys: list of text
//     // resources: list of Resource: text + url
//     // confirmation: text explanatory
//     // question_id: guid
//
// }

// const quiz = {
//     name: "quiz.name.internal",
//     image_url: "https://example.com/image.png",
//     title: "Title of Quiz",
//     questions: [question],
// }


function Question(props) {
    const text = props.item.text;
    return <article>
        <p>Question: {text}</p>
        <p>Age: {props.age}</p>
        </article>;
}

test('it renders', ()=>{
    const question = {
        text: "What is your name?"
    }
    render(<Question item={question} age="88"/>);
    const element = screen.getByText(/what/i);
    expect(element).toBeInTheDocument();
    expect(element).toBeVisible();
    const other_element = screen.getByText(/88/);
    expect(other_element).toBeVisible();
    expect(other_element.tagName).toBe("P")
})