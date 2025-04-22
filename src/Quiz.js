import grippy from './grippy.jpeg'

function QuestionSwatch(props) {

    const uptriangle = "🔺"
    const downtriangle = "🔻"

    function startdrag(e) {

    }

    function expandQuestion(e) {

    }

    return <div className="w3-bar w3-border w3-auto" draggable="true" onDrag={startdrag}>
        <img src={grippy} className="w3-bar-item  w3-left-align w3-col s1" alt="grippy"/>
        <span className="w3-bar-item w3-panel w3-col s9" onClick={expandQuestion}>
            <span className="w3-col s9 w3-panel w3-green">{props.text}</span>
            <span className="w3-col s1">{downtriangle}</span>
        </span>
        <button className="w3-button w3-right-align w3-col s1">&times;</button>
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