import {ReactSortable} from "react-sortablejs";
import {useState} from "react";
import "./w3.css";
import "./App.css";
import PropTypes from "prop-types";


function QuestionSummary(props) {
    QuestionSummary.propTypes = {
        question: PropTypes.shape({
            text: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired
        }).isRequired
    };
    const question = props.question
    return <div className="quiz-control drag-item w3-bar w3-card" draggable="true" key={question.uuid}>
        <img className="handle w3-bar-item" src="/dragit.png" alt="drag handle"/>
        <span className="w3-bar-item w3-cell-middle">{question.text}</span>
        <img src="/delete.png" alt="delete question" className="w3-right w3-bar-item"/>
        <img src="/drop-down.png" alt="edit question" className="w3-right w3-bar-item"/>
    </div>

}

QuestionList.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired
        })
    ).isRequired
};


function QuestionList(props) {

    const [state, setState] = useState(props.questions)

    return <>
        <h2>Questions</h2>
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


const listOfQuestions = [
    {text: "Who Ya Gonna Call?", uuid: "1"},
    {text: "What you talking about?", uuid: "2"},
    {text: "Where's the beef?", uuid: "3"},
    {text: "How YOU doing?", uuid: "4"}
]

export function Quiz() {
    return <div>
        <h1>Quiz <img src="/icons8-add-48.png" alt="add question"/></h1>
        <input type="text" placeholder="Test Name"/>
        <input type="text" placeholder="Description"/>
        <input type="url" placeholder="Image URL"/>
        <img src={"/logo.svg"} alt="logo preview" />
        <QuestionList questions={listOfQuestions}/>
    </div>
}