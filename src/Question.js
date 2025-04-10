import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {DecoyList} from "./DecoyList";
import {ResourceList} from "./ResourceList";
import {Resource} from "./Resource";


export function Question(props) {

    const [doc, setDoc] = useState(props.item ?? {question_id: uuidv4()})

    function handleChange(e) {
        const newDoc = {
            ...doc,
            [e.target.name]: e.target.value
        };
        setDoc(newDoc)
    }

    return <form className="w3-card-4 w3-container">
        <h2 className="w3-green">Edit Question</h2>
        <p>
            <label htmlFor="text">Question To Ask:</label>
            <input
                className="w3-input"
                type="text"
                name="text"
                id="text"
                placeholder="question text"
                onChange={handleChange}
                value={doc.text ?? ""}
            />
        </p>

        <label htmlFor="answer">Correct Answer:</label>
        <input
            className="w3-input"
            type="text"
            name="answer"
            id="answer"
            placeholder="answer text"
            onChange={handleChange}
            value={doc.answer ?? ""}
        />
        <label htmlFor="confirmation">Confirmation:</label>
        <input
            className="w3-input"
            type="text"
            name="confirmation"
            id="confirmation"
            placeholder="confirmation text"
            onChange={handleChange}
            value={doc.confirmation ?? ""}
        />

        <DecoyList/>
        <hr/>
        <h2>Temporary Only to Test Resources </h2>
        <Resource url="http://wikipedia.com" description="Wikipedia"/>
        <Resource url="https://example.com" description="Example"/>
        <Resource/>
        <hr/>

        <ResourceList/>

    </form>
        ;
}


// const resources = [
//     {

//         text: "text",
//         url: "https://example.com"
//     }
// ]

// const question = {
//     text: 'This is my question'
//     answer: text
//     // decoys: list of text
//     // resources: list of Resource: text + url
//     confirmation: text explanatory
//     question_id: guid
//
// }

// const quiz = {
//     name: "quiz.name.internal",
//     image_url: "https://example.com/image.png",
//     title: "Title of Quiz",
//     questions: [question],
// }

