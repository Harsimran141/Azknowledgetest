import { useState } from "react";

const App = () => {
  const questions = [
    {
      question:
        "How can you ensure that the vehicle has passed an annual inspection?",
      options: [
        "A valid inspection sticker is attached to the vehicle",
        "Does not require proof",
        "As stated by the operator",
        "Has to be forwarded to MTO (Ministry of Transportation)",
      ],
      Answer: "A valid inspection sticker is attached to the vehicle",
    },

    {
      question:
        "A police or appointed ministry officer has the authority to perform a safety inspection:",
      options: [
        "Only at an inspection station",
        "At any time and any location",
        "Only on public roadway",
        "During daylight hours only",
      ],
      Answer: "At any time and any location",
    },

    {
      question: "A properly completed daily inspection report contains:",
      options: [
        "Appropriate schedule",
        "Daily log",
        "The signature of the driver or person completing the report",
        "Delivery schedule",
      ],
      Answer: "The signature of the driver or person completing the report",
    },

    {
      question:
        "You must ensure that the following items are secure on the vehicle:",
      options: [
        "Only items being transported for paid compensation",
        "The entire load including items such as gas cans and wheel chocks",
        "Only the load and direct attachments",
        "None, load security is the responsibility of operator not driver",
      ],
      Answer:
        "The entire load including items such as gas cans and wheel chocks",
    },

    {
      question:
        "A front tire fails an inspection if the tread on two adjacent grooves anywhere on the tire are:",
      options: [
        "Less than 1.5 millimetres (0.06 inches)",
        "Less than 3 millimetres (0.12 inches)",
        "Less than 6 millimetres (0.24 inches)",
        "Less than 15 millimetres (0.59 inches)",
      ],
      Answer: "Less than 3 millimetres (0.12 inches)",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectOption, SetselectOption] = useState(null);
  const [correct, SetCorrect] = useState(null);
  const [score, SetScore] = useState(0);
  const [answered, Setanswered] = useState(false);
  return (
    <div
      className="bg-green-200 w-[800px] h-[800px] 
    rounded-2xl p-8 mt-10 mx-auto shadow-lg"
    >
      <div className="flex justify-center">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-8">
          PRACTICE QUESTION CLASS A WRITTEN TEST
        </h1>
      </div>
      <div className=" flex rounded-2xl justify-center mt-2 text-2xl py-2 px-2 bg-amber-100 font-bold ">
        <p> Question No: {currentQuestion + 1}</p>
      </div>
      <div>
        <h2 className="flex flex-col text-xl  text-orange-800 gap-3">
          {questions[currentQuestion].question}
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        {questions[currentQuestion].options.map((items, index) => (
          <button 
            onClick={() => {
  if (answered) return;

  SetselectOption(items);
  Setanswered(true);

  if (items === questions[currentQuestion].Answer) {
    SetCorrect("Correct");
    SetScore(score + 1);
  } else {
    SetCorrect("Wrong");
  }
}}
            key={index}
            className={`w-full text-left p-3 
              bg-white border border-gray-300 rounded-lg hover:bg-blue-600 
              ${items === selectOption ? "text-red-400" : "text-black"}
            `}
             
          >
            {items}
          </button>
        ))}

        <button
          className="mt-6 bg-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-blue-800 text-white "
          onClick={() => {
  if (!answered) return;

  if (currentQuestion === questions.length - 1) {
    setCurrentQuestion(0);
  } else {
    setCurrentQuestion(currentQuestion + 1);
  }

  SetselectOption(false);
  SetCorrect(null);
  Setanswered(false);
}}
        >
          Next
        </button>

        <h1 className= {`text-4xl font-bold mt-5 ${correct === "Correct" ? "text-green-600" : " text-red-600"}`}>{correct}</h1>
        <div className="text-4xl font-bold mt-5">{selectOption}</div>
        <div> Current Score = {score}</div>
      </div>
    </div>
  );
};
export default App;
