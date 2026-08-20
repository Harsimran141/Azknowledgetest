import { useState } from "react";

const App = () => {
  const questions = [
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"],
      answer: "New Delhi",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      answer: "Tokyo",
    },
    {
      question: "What is the capital of France?",
      options: ["Lyon", "Paris", "Nice", "Marseille"],
      answer: "Paris",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswer = (item) => {
    if (item === questions[currentQuestion].answer) {
      setCorrectAnswer("Correct Answer");
      setScore((prevScore) => prevScore + 1);
    } else {
      setCorrectAnswer("Wrong Answer");
    }

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  return (
    <div className="flex flex-col items-center">

      <h1 className="text-center text-red-900 p-2 rounded-2xl bg-amber-400">
        Quiz App
      </h1>

      <div className="w-72 min-h-48 rounded-2xl mt-4 bg-blue-300 p-4">

        {quizFinished ? (
          <div className="text-center">
            <h1 className="text-xl text-green-700">
              Quiz Finished!
            </h1>

            <h2 className="mt-4">
              Your Score: {score} / {questions.length}
            </h2>
          </div>
        ) : (
          <div>

            <p>
              {questions[currentQuestion].question}
            </p>

            <div className="mt-4">
              {questions[currentQuestion].options.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(item)}
                  className="p-2 bg-purple-500 text-white rounded ml-2 mt-2"
                >
                  {item}
                </button>
              ))}
            </div>

            <h1 className="text-white mt-4">
              {correctAnswer}
            </h1>

            <h1 className="text-white">
              Total = {score}
            </h1>

          </div>
        )}

      </div>
    </div>
  );
};

export default App;