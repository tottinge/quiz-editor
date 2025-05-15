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

    const inputClassCSS = "w3-input w3-border w3-round-large"
    const labelClassCSS = "w3-label"

    return <form className="w3-card-4 w3-container w3-light-grey">
        <label className={labelClassCSS} htmlFor="text">Question To Ask:</label>
        <input
            className={inputClassCSS}
            type="text"
            name="text"
            id="text"
            placeholder="question text"
            onChange={handleChange}
            value={doc.text ?? ""}
        />

        <label className={labelClassCSS} htmlFor="answer">Correct Answer:</label>
        <input
            className={inputClassCSS}
            type="text"
            name="answer"
            id="answer"
            placeholder="answer text"
            onChange={handleChange}
            value={doc.answer ?? ""}
        />
        
        <label className={labelClassCSS} htmlFor="confirmation">Confirmation:</label>
        <input
            className={inputClassCSS}
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

