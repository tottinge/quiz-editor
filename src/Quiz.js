import grippy from './grippy.jpeg'

function QuestionSwatch(props) {
    function startdrag(e) {

    }

    return <div className="w3-bar w3-border"  draggable="true" onDrag={startdrag}>
        <img src={grippy} className="w3-bar-item" alt="grippy" style={{height:"2em"}} />
        <span className="w3-bar-item">{props.text}</span>
        <button className="w3-button w3-right">&times;</button>
    </div>
}

function QuestionList() {
    function doDrop(e) {
    }

    return <div className="w3-bar w3-border" onDrop={doDrop}>
       <QuestionSwatch text={"Who Ya Gonna Call?"}/>
       <QuestionSwatch text={"What you talking about?"}/>
       <QuestionSwatch text={"Where's the beef?"}/>
       <QuestionSwatch text={"How YOU doing?"}/>
    </div>
}

export function Quiz() {
    return <div>
        Quiz
        <QuestionList/>
    </div>
}