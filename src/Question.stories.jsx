import { QuestionView } from './QuestionView';

const meta = {
  component: QuestionView,
};

export default meta;

export const Empty = {
  args: {
    updateParent: () => { console.log("update parent")}
  }
};

export const Populated = {
  args: {
    updateParent: () => {console.log("update parent")},
    question: {
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
  }
};