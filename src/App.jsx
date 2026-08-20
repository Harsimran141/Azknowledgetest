import { useState } from "react";

const App = () =>{
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
const [currentQuestion,SetCurrentQuestion] = useState(0);
  return(
    
   <div className="flex flex-col items-center">
        <h1 className="text-center text-red-900 p-0.5 rounded-2xl bg-amber-400">  Quiz App</h1>
    <div className="w-52  h-48 rounded-2xl mt-4  bg-blue-300">
      <div className="text-[10px] justify-items-center">
        <div>
<p>{questions[currentQuestion].question}</p>
        </div>
      </div>
        </div>

    </div>
  )
}
export default App;