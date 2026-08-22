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
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (item) => {
    setSelectedAnswer(item);

    if (item === questions[currentQuestion].answer) {
      setCorrectAnswer("Correct Answer");
      setScore((prevScore) => prevScore + 1);
    } else {
      setCorrectAnswer("Wrong Answer");
    }
  };

  const nextQuestion = () => {
    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setCorrectAnswer(null);
    setScore(0);
    setQuizFinished(false);
    setSelectedAnswer(null);
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

            <div className="flex justify-center mt-8">
              <button
                onClick={restartQuiz}
                className="bg-red-600 p-2 rounded text-white font-bold hover:bg-green-600"
              >
                Restart
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="font-bold">
              Question {currentQuestion + 1} of {questions.length}
            </p>

            <p className="mt-2">
              {questions[currentQuestion].question}
            </p>

            <div className="mt-4">
              {questions[currentQuestion].options.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(item)}
                  disabled={selectedAnswer !== null}
                  className={`p-2 text-white rounded ml-2 mt-2 ${
                    selectedAnswer === item
                      ? item === questions[currentQuestion].answer
                        ? "bg-green-600"
                        : "bg-red-600"
                      : "bg-purple-500"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {correctAnswer && (
              <h1
                className={
                  correctAnswer === "Correct Answer"
                    ? "text-green-600 mt-4 font-bold"
                    : "text-red-600 mt-4 font-bold"
                }
              >
                {correctAnswer}
              </h1>
            )}

            <h1 className="text-white mt-2">
              Total = {score}
            </h1>

            {selectedAnswer && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={nextQuestion}
                  className="bg-green-600 text-white p-2 rounded font-bold hover:bg-green-800"
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;