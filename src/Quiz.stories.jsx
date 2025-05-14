import { QuizView } from './QuizView';

const meta = {
  component: QuizView,
};

export default meta;

export const Default = {
  args: {
    quiz: {
      shortname: "Hardcoded",
      description: "Hard Coded Quiz Argument",
      img_url: "https://www.w3schools.com/w3css/img_lights.jpg",
      questions: [
        {
          text: "What is your name?",
          answer: "John",
          confirmation: "John is the correct answer",
          decoys: ["Jane", "Jill", "Johnny"],
          resources: [
            {
              text: "Title for recommended reading",
              url: "https://www.w3schools.com/w3css/img_lights.jpg"}
          ]
        },
        {
          text: "What is your quest?",
          answer: "To seek the Holy Grail",
          confirmation: "To seek the Holy Grail is the correct answer",
          decoys: ["To destroy the Holy Grail", "To seek Camelot", "To slay rabbits"],
          resources: [
            {
              text: "Scatter-gather",
              url: "https://industriallogic.com/scatter-gather"
            }
          ]
        }
      ]
    }
  }
};