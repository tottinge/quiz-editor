import {QuestionListView} from "./QuestionListView";
import {render, screen} from "@testing-library/react";
import {expect, it} from "@jest/globals";
import userEvent from "@testing-library/user-event";

function getQuestionElements() {
    return screen.queryAllByRole('listitem');
}

it("can render an empty question list", () => {
    render(<QuestionListView questions={[]}/>);
    expect(getQuestionElements()).toHaveLength(0);
});

it("can render a populated question list", () => {
    const questions = [
        {id: "1", text: "First question", uuid:"1"},
        {id: "2", text: "Second question", uuid:"2"}
    ];
    render(<QuestionListView questions={questions}/>);
    const items = getQuestionElements();
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("First question");
    expect(items[1]).toHaveTextContent("Second question");
});

it("maintains order of questions", () => {
    const questions = [
        {id: "1", text: "First question"},
        {id: "2", text: "Second question"},
        {id: "3", text: "Third question"}
    ];
    render(<QuestionListView questions={questions}/>);
    const items = getQuestionElements();
    expect(items).toHaveLength(3);
    expect(items[0]).toHaveTextContent("First question");
    expect(items[1]).toHaveTextContent("Second question");
    expect(items[2]).toHaveTextContent("Third question");
});
