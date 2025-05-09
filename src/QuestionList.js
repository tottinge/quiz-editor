import {useState} from "react";
import {ReactSortable} from "react-sortablejs";
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";
import {Question} from "./Question";

function QuestionSummary(props) {
    QuestionSummary.propTypes = {
        question: PropTypes.shape({
            text: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired
        }).isRequired
    };
    const question = props.question ?? {text: '', uuid: uuidv4()}
    const [isOpen, setIsOpen] = useState(false)
    return <div className="accordion-itemn quiz-control drag-item w3-bar w3-card" draggable="true" key={question.uuid}>
        <img className="handle w3-bar-item" src="/dragit.png" alt="drag handle"/>
        <span className="w3-bar-item w3-cell-middle">{question.text}</span>
        <img src="/delete.png" alt="delete question" className="w3-right w3-bar-item"/>
        <img
            src="/drop-down.png"
            alt="edit question"
            onClick={() => setIsOpen(!isOpen)}
            className="w3-right w3-bar-item"
        />
        {isOpen && <Question question={props.question}></Question>}
    </div>

}

export function QuestionList(props) {
    const [state, setState] = useState(listOfQuestions ?? [])

    return <>
        <h2>Questions
            <input
                type="image"
                src="./add.png"
                alt="add question"
                className="w3-right w3-bar-item"
            />
        </h2>
        <ReactSortable
            list={state} setList={setState}
            delay={2}
            className="w3-container"
            animation={150}
            ghostClass={"question-ghost"}
            handle={".handle"}
        >
            {state.map((question) => (
                <QuestionSummary question={question} key={question.uuid}/>
            ))}
        </ReactSortable>
    </>
}

export const listOfQuestions = [
    {text: "Who Ya Gonna Call?", uuid: "1"},
    {text: "What you talking about?", uuid: "2"},
    {text: "Where's the beef?", uuid: "3"},
    {text: "How YOU doing?", uuid: "4"}
]