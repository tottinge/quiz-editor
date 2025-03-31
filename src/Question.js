export function Question(props) {
    const text = props.item.text;
    return <article>
        <p>Question: {text}</p>
        <p>Age: {props.item.age}</p>
    </article>;
}


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

