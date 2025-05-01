import {ReactSortable} from "react-sortablejs";
import {useState} from "react";

function QuestionSummary(props) {

    return <div className="w3-bar list-group-item w3-card">
        <span className="w3-bar-item">&nbsp;&nbsp;{props.question.text}</span>
        <button className="w3-right w3-bar-item">&times;</button>
    </div>
}

const listOfQuestions = [
    {text: "Who Ya Gonna Call?", uuid: "1", url: "https://www.npmjs.com/"},
    {text: "What you talking about?", uuid: "2", url: "https://www.wikipedia.org/"},
    {text: "Where's the beef?", uuid: "3", url: "https://www.example.com/"},
    {text: "How YOU doing?", uuid: "4", url: "https://www.xkcd.com/"}
]

function QuestionList(props) {
    const [state, setState] = useState(listOfQuestions)

    return <ReactSortable
        swap
        list={state}
        setList={setState}
        delay={2}
        className="w3-container"
        animation={150}
        ghostClass={"question-ghost"}
        // handle='.handle'
    >
        {state.map((question) => (
            <QuestionSummary
                key={question.uuid}
                question={question}
            />
        ))}
    </ReactSortable>
}

export function Quiz() {
    return <div>
        <h1>Quiz</h1>
        <QuestionList/>
    </div>
}