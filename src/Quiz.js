import {useDroppable, DndContext} from '@dnd-kit/core'

function QuestionSummary(props) {
    const {isOver, seNodeRef} = useDroppable({id:props.id})
    const style = {opacity: isOver ? 0.5 : 1}

    return <div className="w3-bar w3-border w3-auto" draggable="true" >
        {props.question.text}
    </div>
}

function QuestionList() {

    return <DndContext className="w3-bar w3-border">
        <QuestionSummary question={{text:"Who Ya Gonna Call?", url:"https://www.npmjs.com/"}}/>
        <QuestionSummary question={{text:"What you talking about?", url:"https://www.npmjs.com/"}}/>
        <QuestionSummary question={{text:"Where's the beef?", url:"https://www.npmjs.com/"}}/>
        <QuestionSummary question={{text:"How YOU doing?", url:"https://www.npmjs.com/"}}/>
    </DndContext>
}

export function Quiz() {
    return <div>
        Quiz
        <QuestionList/>
    </div>
}