
import {ReactSortable} from "react-sortablejs";
import {useState} from "react";

function QuestionSummary(props) {

    return <div className="w3-row list-group-item w3-container">
        <span className="w3-left">{props.question.text}</span>
        <button className="w3-right">&times;</button>
    </div>
}

const listOfQuestions = [
    {text: "Who Ya Gonna Call?", uuid: "1", url: "https://www.npmjs.com/"},
    {text: "What you talking about?", uuid: "2", url: "https://www.wikipedia.org/"},
    {text: "Where's the beef?", uuid: "3", url: "https://www.example.com/"},
    {text: "How YOU doing?", uuid: "4", url: "https://www.xkcd.com/"}
]

function QuestionList(props) {
    const [state,setState] = useState(listOfQuestions)

    return <ReactSortable
        swap
        list={state}
        setList={setState}
        animation={200}
        delay={2}
        className="w3-panel"
        ghostClass={"question-ghost"}
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
        Quiz
        <QuestionList/>
    </div>
}