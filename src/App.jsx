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

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-white">
            Quiz<span className="text-purple-500">App</span>
          </h1>

          <p className="text-slate-400 mt-2">
            Test your general knowledge
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-6">

          {quizFinished ? (

            /* Final Screen */
            <div className="text-center py-8">

              <div className="text-6xl mb-4">
                🏆
              </div>

              <h2 className="text-3xl font-bold text-slate-800">
                Quiz Finished!
              </h2>

              <p className="text-slate-500 mt-2">
                Great job! Here is your final score.
              </p>

              <div className="bg-purple-50 rounded-2xl p-6 mt-6">

                <p className="text-slate-500">
                  Your Score
                </p>

                <h3 className="text-4xl font-extrabold text-purple-600 mt-2">
                  {score} / {questions.length}
                </h3>

                <p className="text-slate-500 mt-2">
                  {Math.round((score / questions.length) * 100)}%
                </p>

              </div>

              <button
                onClick={restartQuiz}
                className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition"
              >
                🔄 Restart Quiz
              </button>

            </div>

          ) : (

            /* Question Screen */
            <div>

              {/* Question Number */}
              <div className="flex justify-between items-center mb-3">

                <span className="text-sm font-semibold text-purple-600">
                  Question {currentQuestion + 1}
                </span>

                <span className="text-sm text-slate-500">
                  {questions.length} Questions
                </span>

              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-200 rounded-full h-2 mb-6">
                <div
                  className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              {/* Question */}
              <h2 className="text-2xl font-bold text-slate-800 leading-snug">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="mt-6 space-y-3">

                {questions[currentQuestion].options.map(
                  (item, index) => (

                    <button
                      key={index}
                      onClick={() => handleAnswer(item)}
                      disabled={selectedAnswer !== null}
                      className={`w-full text-left p-4 rounded-xl border-2 font-semibold transition ${
                        selectedAnswer === item
                          ? item === questions[currentQuestion].answer
                            ? "bg-green-100 border-green-500 text-green-700"
                            : "bg-red-100 border-red-500 text-red-700"
                          : "bg-slate-50 border-slate-200 hover:border-purple-500 hover:bg-purple-50"
                      }`}
                    >

                      <span className="mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>

                      {item}

                    </button>

                  )
                )}

              </div>

              {/* Answer Result */}
              {correctAnswer && (
                <div
                  className={`mt-5 p-3 rounded-xl text-center font-bold ${
                    correctAnswer === "Correct Answer"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {correctAnswer}
                </div>
              )}

              {/* Score */}
              <div className="flex justify-between items-center mt-6">

                <span className="text-slate-500">
                  Score
                </span>

                <span className="font-bold text-purple-600">
                  {score}
                </span>

              </div>

              {/* Next Button */}
              {selectedAnswer && (
                <button
                  onClick={nextQuestion}
                  className="w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition"
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question →"}
                </button>
              )}

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default App;