import {ReactSortable} from "react-sortablejs";
import {useState} from "react";
import "./w3.css";
import "./App.css";



function QuestionSummary(props) {
    const question = props.question
    return <div className="quiz-control drag-item w3-bar w3-card" draggable="true" key={question.uuid}>
        <img className="handle w3-bar-item" src="/dragit.png" alt="drag handle" />
        <span className="w3-bar-item w3-cell-middle">{question.text}</span>
        <img src="/delete.png" className="w3-right w3-bar-item"/>
    </div>

}

const listOfQuestions = [
    {text: "Who Ya Gonna Call?", uuid: "1"},
    {text: "What you talking about?", uuid: "2"},
    {text: "Where's the beef?", uuid: "3"},
    {text: "How YOU doing?", uuid: "4"}
]

function QuestionList(props) {
    const [state, setState] = useState(listOfQuestions)

    return <>
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

export function Quiz() {
    return <div>
        <h1>Quiz</h1>
        <QuestionList/>
    </div>
}