const questions = [
  {
    question: "What is React?",
    options: ["Library", "Database", "Language", "Operating System"],
    answer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState",
  },
  {
    question: "What does JSX mean?",
    options: ["JavaScript XML", "Java Syntax XML", "JavaScript Extra", "None"],
    answer: "JavaScript XML",
  },
  {
    question: "Which Hook is used to perform side effects in React?",
    options: ["useState", "useEffect", "useRef", "useMemo"],
    answer: "useEffect",
  },
  {
    question: "Which method creates a new array?",
    options: ["map()", "push()", "pop()", "forEach()"],
    answer: "map()",
  },
];
const App = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-red-600 justify-center items-center">
          Air Break Question
        </h1>
      </div>
      <div className="text-[5px]">
        {questions.map((items, index) => (
          <div key={index}>
            {items.question}
            <div>{items.options.map((options,index)=>(
                <p key={index}>{options}</p>
            ))}</div>
          </div>
        ))}
      </div>
      <div>
        <button className="text-green-600 bg-amber-300 p-0.5 rounded shadow-2xl font-bold">Next</button>
      </div>
    </div>
  );
};
export default App;
