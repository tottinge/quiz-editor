import { QuestionListView } from './QuestionListView';

const meta = {
  component: QuestionListView,
};

export default meta;

export const Empty = {
  args: {}
};

export const Populated = {
  args: {
    questions: [
      {
        text: "What is your name?",
        answer: "John",
        confirmation: "John is the correct answer",
        decoys: ["Jane", "Jill", "Johnny"],
        resources: [
          {
            text: "Title for recommended reading",
          }
        ]
      }
    ]
  }
};