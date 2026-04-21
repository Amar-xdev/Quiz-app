const questions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library"
  },
  {
    question: "Who created React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  },
  {
    question: "What is JSX?",
    options: ["JavaScript XML", "Java Syntax", "JSON XML", "Java Extension"],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used for state?",
    options: ["useEffect", "useState", "useRef", "useMemo"],
    answer: "useState"
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useEffect"
  },
  {
    question: "What is a component in React?",
    options: ["Function/Class", "Database", "API", "CSS file"],
    answer: "Function/Class"
  },
  {
    question: "What is props?",
    options: ["Data passed to component", "State", "CSS", "Hook"],
    answer: "Data passed to component"
  },
  {
    question: "What is state?",
    options: ["Component data", "Props", "HTML", "API"],
    answer: "Component data"
  },
  {
    question: "React is written in?",
    options: ["JavaScript", "Python", "Java", "C++"],
    answer: "JavaScript"
  },
  {
    question: "Which method renders React DOM?",
    options: ["ReactDOM.render", "renderDOM", "React.render", "DOM.render"],
    answer: "ReactDOM.render"
  },
  {
    question: "What is a key in React list?",
    options: ["Unique identifier", "Index", "Class", "Hook"],
    answer: "Unique identifier",
    test: {
      
    }
  },
  {
    question: "Which hook is used for context?",
    options: ["useContext", "useState", "useEffect", "useMemo"],
    answer: "useContext"
  },
  {
    question: "What is virtual DOM?",
    options: ["Lightweight DOM copy", "Real DOM", "HTML", "Browser"],
    answer: "Lightweight DOM copy"
  },
  {
    question: "Which company maintains React?",
    options: ["Facebook", "Google", "Amazon", "Netflix"],
    answer: "Facebook"
  },
  {
    question: "What is useRef used for?",
    options: ["DOM reference", "State", "Routing", "API"],
    answer: "DOM reference"
  },
  {
    question: "What is useMemo used for?",
    options: ["Performance optimization", "Routing", "Styling", "State"],
    answer: "Performance optimization"
  },
  {
    question: "Which hook handles routing?",
    options: ["useNavigate", "useState", "useEffect", "useRef"],
    answer: "useNavigate"
  },
  {
    question: "What is React Router?",
    options: ["Routing library", "CSS library", "Database", "API"],
    answer: "Routing library"
  },
  {
    question: "What is SPA?",
    options: ["Single Page Application", "Simple Page App", "Server Page App", "Static Page App"],
    answer: "Single Page Application"
  },
  {
    question: "What does useEffect dependency array do?",
    options: ["Controls execution", "Stores data", "Renders UI", "Adds CSS"],
    answer: "Controls execution"
  },
  {
    question: "Which hook is used for performance?",
    options: ["useMemo", "useState", "useEffect", "useRef"],
    answer: "useMemo"
  },
  {
    question: "What is lifting state up?",
    options: ["Sharing state", "Deleting state", "Styling", "Routing"],
    answer: "Sharing state"
  },
  {
    question: "What is controlled component?",
    options: ["Form controlled by state", "API", "CSS", "Hook"],
    answer: "Form controlled by state"
  },
  {
    question: "What is uncontrolled component?",
    options: ["DOM controlled form", "API", "State", "CSS"],
    answer: "DOM controlled form"
  },
  {
    question: "What is Fragment?",
    options: ["Wrapper without div", "Hook", "State", "API"],
    answer: "Wrapper without div"
  },
  {
    question: "What is lazy loading?",
    options: ["Load on demand", "Load all", "Delete", "API"],
    answer: "Load on demand"
  },
  {
    question: "Which hook is used for reducer?",
    options: ["useReducer", "useState", "useEffect", "useRef"],
    answer: "useReducer"
  },
  {
    question: "What is context API?",
    options: ["Global state", "CSS", "API", "Routing"],
    answer: "Global state"
  },
  {
    question: "What is prop drilling?",
    options: ["Passing props deeply", "State delete", "CSS", "Routing"],
    answer: "Passing props deeply"
  },
  {
    question: "What is reconciliation?",
    options: ["DOM diffing", "CSS", "Routing", "API"],
    answer: "DOM diffing"
  },
  {
    question: "What is React.StrictMode?",
    options: ["Debug tool", "API", "CSS", "State"],
    answer: "Debug tool"
  },
  {
    question: "What is hydration?",
    options: ["Attach events to SSR", "CSS", "API", "State"],
    answer: "Attach events to SSR"
  },
  {
    question: "What is SSR?",
    options: ["Server Side Rendering", "Client Rendering", "Static", "API"],
    answer: "Server Side Rendering"
  },
  {
    question: "What is CSR?",
    options: ["Client Side Rendering", "Server", "Static", "API"],
    answer: "Client Side Rendering"
  },
  {
    question: "What is key purpose?",
    options: ["Identify elements", "Style", "API", "Hook"],
    answer: "Identify elements"
  },
  {
    question: "What is React.memo?",
    options: ["Prevent re-render", "State", "API", "CSS"],
    answer: "Prevent re-render"
  },
  {
    question: "What is useCallback?",
    options: ["Memoize function", "State", "API", "CSS"],
    answer: "Memoize function"
  },
  {
    question: "What is event handling?",
    options: ["Handle user actions", "API", "CSS", "State"],
    answer: "Handle user actions"
  },
  {
    question: "What is conditional rendering?",
    options: ["Render based on condition", "API", "CSS", "Hook"],
    answer: "Render based on condition"
  },
  {
    question: "What is default export?",
    options: ["Single export", "Multiple export", "CSS", "API"],
    answer: "Single export"
  },
  {
    question: "What is named export?",
    options: ["Multiple export", "Single export", "CSS", "API"],
    answer: "Multiple export"
  },
  {
    question: "What is hooks rule?",
    options: ["Top-level only", "Inside loop", "Inside condition", "Anywhere"],
    answer: "Top-level only"
  },
  {
    question: "What is React DevTools?",
    options: ["Debug tool", "API", "CSS", "Database"],
    answer: "Debug tool"
  },
  {
    question: "What is DOM?",
    options: ["Document Object Model", "Data Object", "CSS", "API"],
    answer: "Document Object Model"
  },
  {
    question: "What is Babel?",
    options: ["JS compiler", "CSS tool", "API", "Database"],
    answer: "JS compiler"
  },
  {
    question: "What is Webpack?",
    options: ["Module bundler", "API", "CSS", "State"],
    answer: "Module bundler"
  },
  {
    question: "What is Vite?",
    options: ["Build tool", "Database", "CSS", "API"],
    answer: "Build tool"
  },
  {
    question: "What is npm?",
    options: ["Package manager", "API", "CSS", "Database"],
    answer: "Package manager"
  },
  {
    question: "What is useLayoutEffect?",
    options: ["Sync effect", "Async effect", "State", "API"],
    answer: "Sync effect"
  },
  {
    question: "What is StrictMode used for?",
    options: ["Detect issues", "CSS", "API", "State"],
    answer: "Detect issues"
  }
];

export default questions;