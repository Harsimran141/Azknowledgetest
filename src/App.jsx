import { useState } from "react";

const App = () => {
  const questions = [
{
    id: 1,
    type: "multiple_choice",
    question: "How can you ensure that the vehicle has passed an annual inspection?",
    options: [
      "A valid inspection sticker is attached to the vehicle",
      "Does not require proof",
      "As stated by the operator",
      "Has to be forwarded to MTO (Ministry of Transportation)"
    ]
  },

  {
    id: 2,
    type: "multiple_choice",
    question: "A police or appointed ministry officer has the authority to perform a safety inspection:",
    options: [
      "Only at an inspection station",
      "At any time and any location",
      "Only on public roadway",
      "During daylight hours only"
    ]
  },

  {
    id: 3,
    type: "multiple_choice",
    question: "A properly completed daily inspection report contains:",
    options: [
      "Appropriate schedule",
      "Daily log",
      "The signature of the driver or person completing the report",
      "Delivery schedule"
    ]
  },

  {
    id: 4,
    type: "multiple_choice",
    question: "You must ensure that the following items are secure on the vehicle:",
    options: [
      "Only items being transported for paid compensation",
      "The entire load including items such as gas cans and wheel chocks",
      "Only the load and direct attachments",
      "None, load security is the responsibility of operator not driver"
    ]
  },

  {
    id: 5,
    type: "multiple_choice",
    question: "A front tire fails an inspection if the tread on two adjacent grooves anywhere on the tire are:",
    options: [
      "Less than 1.5 millimetres (0.06 inches)",
      "Less than 3 millimetres (0.12 inches)",
      "Less than 6 millimetres (0.24 inches)",
      "Less than 15 millimetres (0.59 inches)"
    ]
  },

  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="bg-green-200 w-[800px] h-[600px] rounded mt-10 mx-auto">
      <div className="flex justify-center">
        <h1 className="text-2xl text-blue-600 font-bold mt-5">
          Truck A Knowledge Test
        </h1>
      </div>
      <div>
        <h2>{questions[0].question}</h2>
      </div>
        <div>
          {questions.map((items,index)=>(
            <div key={index}>{items.options.map((option,index)=>(
              <p key={index}>{option}</p>
            ))}</div>
          ))}
        </div>

    </div>
  );
};
export default App;
