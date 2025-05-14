import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {DecoyList} from "./DecoyList";
import {ResourceListView} from "./ResourceListView";


export function QuestionView(question, updateParent) {

    const [doc, setDoc] = useState(
        question ?? {question_id: uuidv4()}
    )

    function handleChange(e) {
        const newDoc = {
            ...doc,
            [e.target.name]: e.target.value
        };
        setDoc(newDoc)
        // updateParent(newDoc)
    }

    return <form className="w3-card-4 w3-container">
        <label className="input-label w3-green" htmlFor="text">Question To Ask:</label>
        <input
            className="w3-input"
            type="text"
            name="text"
            id="text"
            placeholder="question text"
            onChange={handleChange}
            value={doc.text ?? ""}
        />

        <label className="input-label" htmlFor="answer">Correct Answer:</label>
        <input
            className="w3-input"
            type="text"
            name="answer"
            id="answer"
            placeholder="answer text"
            onChange={handleChange}
            value={doc.answer ?? ""}
        />
        
        <label className="input-label" htmlFor="confirmation">Confirmation:</label>
        <input
            className="w3-input"
            type="text"
            name="confirmation"
            id="confirmation"
            placeholder="confirmation text"
            onChange={handleChange}
            value={doc.confirmation ?? ""}
        />

        <DecoyList decoys={doc.decoys}/>

        <br/>

        <ResourceListView resources={doc.resources ?? []}/>
    </form>;
}

