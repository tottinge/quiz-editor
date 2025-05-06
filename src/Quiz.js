import {ReactSortable} from "react-sortablejs";
import {useState} from "react";


function QuestionSummary(props) {

    return <span className="w3-bar list-group-item w3-card">
        <span className="w3-bar-item">&nbsp;&nbsp;{props.question.text}</span>
        <button className="w3-right w3-bar-item">&times;</button>
    </span>
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
            // useDragHandle={true}
            handle={".handle"}
        >

            {state.map((question) => (
                <div className="drag-item w3-bar w3-card" draggable="true" key={question.uuid}>
                    <img className="handle w3-bar-item" src="/dragit.png" alt="drag handle" />
                    <span className="w3-bar-item">{question.text}</span>
                    <button className="w3-right w3-bar-item">&times;</button>
                </div>
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