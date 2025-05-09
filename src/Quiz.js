import {useState} from "react";
import "./w3.css";
import "./App.css";
import {QuestionList, listOfQuestions} from "./QuestionList";
import validator from "validator";

export function Quiz(props) {
    const empty_quiz = {
        shortname: "New Quiz",
        description: "",
        img_url: "",
        questions: listOfQuestions
    }
    const [quiz, setQuiz] = useState(props.quiz || {...empty_quiz})

    function updateQuiz(event) {
        setQuiz({...quiz, [event.target.name]: event.target.value})
    }

    const effective_img_url = validator.isURL(quiz.img_url) ? quiz.img_url : "./logo512.png";

    return <div className="quiz-container">
        <h1>
            {quiz.shortname}
            <img
                src={effective_img_url}
                className="quiz-img-preview"
                alt="add question"
            />
        </h1>
        <label htmlFor={"shortname"}>Name:</label>
        <input value={quiz.shortname} type="text" id="shortname" name="shortname"
               onChange={updateQuiz}
               placeholder="Test Name"/>
        <label htmlFor={"description"}>Description:</label>
        <input value={quiz.description} type="text" id="description" name="description"
               onChange={updateQuiz}
               placeholder="Description"/>
        <label htmlFor={"img_url"}>Image URL:</label>
        <input value={quiz.img_url} type="url" id="img_url" name="img_url"
               onChange={updateQuiz}/>
        <QuestionList/>
    </div>
}