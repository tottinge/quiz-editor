import grippy from './grippy.jpeg'

function QuestionList() {

    function startDrag(e, uuid) {
        console.log("startdrag-->", e.target);
        e.dataTransfer.setData("UUID", uuid);
    }

    function doDrop(e) {
        console.log("doDrop of [", e.dataTransfer.getData("UUID"), "]");

    }

    function doDragOver(e) {
        e.preventDefault()
    }


    function QuestionSwatch(props) {
        const question = props.question;
        return <div className="w3-bar w3-border"
                    draggable="true"
                    id={question.uuid}
                    onDragStart={(event)=> startDrag(event, question.uuid)}
            >
            <img src={grippy} className="w3-bar-item" alt="grippy" style={{height: "2em"}}/>
            <span className="w3-bar-item">{question.text}</span>
            <button className="w3-button w3-right">&times;</button>
        </div>
    }

    return <div className="w3-bar w3-border" onDrop={doDrop} onDragOver={doDragOver}>
        <QuestionSwatch question={{text: "Who Ya Gonna Call?", uuid:"1"}} key="a"/>
        <QuestionSwatch question={{text: "What you talking about?", uuid:"2"}} key="b"/>
        <QuestionSwatch question={{text: "Where's the beef?",uuid:"3"}} key="c"/>
        <QuestionSwatch question={{text: "How YOU doing?", uuid:"4"}} key="d"/>
    </div>
}

export function Quiz() {
    return <div>
        Quiz
        <QuestionList/>
    </div>
}