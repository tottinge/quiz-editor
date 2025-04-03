import {useState} from "react";

export function Question(props) {

    const nullQuestion = {text: 'fake'};
    const [doc, setDoc] = useState(props.item ?? nullQuestion)
    const handleChange = (e) => {
        const newDoc = {...doc, [e.target.name]: e.target.value};
        setDoc(newDoc)
    }

    return <form className="w3-container">

        <label htmlFor="text">Question</label>
        <input
            className="w3-input"
            type="text"
            name="text"
            id="text"
            onChange={handleChange}
            value={doc.text}
        />


    </form>;
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

