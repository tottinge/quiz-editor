import {useState} from "react";
import {ReactSortable} from "react-sortablejs";
import {v4 as uuidv4} from "uuid";
import PropTypes from "prop-types";
import {QuestionView} from "./QuestionView";

export function QuestionSummary(props) {
    const [isOpen, setIsOpen] = useState(props.question.text ? false : true)
    const [question, setQuestion] = useState(props.question)

    function onUpdate(newQuestion) {
        setQuestion(newQuestion)
        props.updateParent(newQuestion)
    }


    return <div role="listitem"
                className="accordion-itemn quiz-control drag-item w3-bar w3-card"
                draggable="true"
                key={question.uuid}>
        <img className="handle w3-bar-item" src="/dragit.png" alt="drag handle"/>
        <span className="qs__title w3-bar-item">{question.text}</span>
        <input type={"image"}
               alt="delete question"
               src={"/delete.png"}
               className="w3-right w3-bar-item"
        />
        <input type={"image"}
               alt="edit question"
               src={"drop-down.png"}
               onClick={() => setIsOpen(!isOpen)}
               className="w3-right w3-bar-item"
        />
        {isOpen && <QuestionView question={question} updateParent={onUpdate}></QuestionView>}
    </div>

}

export function QuestionListView(props) {
    QuestionListView.propTypes = {
        questions: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            uuid: PropTypes.string.isRequired
        }))
    };
    const [state, setState] = useState(props.questions ?? [])

    function handleUpdate(question) {
        const questions = state.map((q) => {
            return (q.uuid === question.uuid) ? question : q
        })
        setState(questions)
    }

    return <>
        <h2>Questions
            <input
                type="image"
                src={"./add.png"}
                alt="add question"
                className="w3-right w3-bar-item"
                onClick={() => setState(state.concat([{text: "", uuid: uuidv4()}]))}
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
                <QuestionSummary question={question} key={question.uuid} updateParent={handleUpdate}/>
            ))}
        </ReactSortable>
    </>
}

