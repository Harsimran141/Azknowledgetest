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
        "None, load security is the responsibility of operator not driver",
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
  const [selectOption, SetselectOption] = useState(false);
  const [correct, SetCorrect] = useState(null);
  return (
    <div className="bg-green-200 w-[800px] h-[600px] 
    rounded-2xl p-8 mt-10 mx-auto shadow-lg">
      <div className="flex justify-center">
        <h1 className="text-3xl text-blue-600 font-bold text-center mb-8">
          PRACTICE QUESTION CLASS A WRITTEN TEST
        </h1>
      </div>
      <div>
        <h2 className="flex flex-col text-xl  text-orange-800 gap-3">{questions[currentQuestion].question}</h2>
      </div>
      <div className="flex flex-col gap-3">
        {questions[currentQuestion].options.map((items, index) => (
          <button
            onClick={()=>{SetselectOption(items)
            if(items === questions[currentQuestion].Answer){
                 SetCorrect("Correct ")
            }else{
              SetCorrect("Wrong")
            }
                            
              
            }}
            key={index} 
            className="w-full text-left p-3  bg-white border border-gray-300 rounded-lg hover:bg-blue-600"
          >
            {items}
          </button>
        ))}

        <button
        className="mt-6 bg-blue-600 font-bold px-6 py-2 rounded-lg hover:bg-blue-800 text-white "
          
          onClick={() => {
            if (currentQuestion === questions.length - 1) {
              setCurrentQuestion(0);
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          }}
        >
          Next
        </button>
        <p>{currentQuestion}</p>
        <h1 className="text-xl font-bold mt-5">{correct}</h1>
        <div className="text-lg mt-3">
          {selectOption}
        </div>
      </div>
    </div>
  );
};
export default App;
