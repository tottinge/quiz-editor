import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {DecoyList} from "./DecoyList";
import {ResourceList} from "./ResourceList";


export function Question(props) {

    const [doc, setDoc] = useState(
        props.item ?? {question_id: uuidv4()}
    )

    function handleChange(e) {
        const newDoc = {
            ...doc,
            [e.target.name]: e.target.value
        };
        setDoc(newDoc)
    }

    return <form className="w3-card-4 w3-container">
        <h2>{doc.text??"New Question"}</h2>
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

        <ResourceList resources={doc.resources || []}/>
    </form>;
}

