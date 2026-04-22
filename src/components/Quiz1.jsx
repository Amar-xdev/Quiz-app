import React, { useState, useEffect } from "react";
import questions from "../questions";
import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState("");
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(10);

  useEffect(() => {
    setSelected(answers[currentQuestion] || "");
  }, [currentQuestion, answers]);

  useEffect(() => {
    if (showResult) return;

    if (time === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, currentQuestion, showResult]);

  const calculateScore = () => {
    let total = 0;

    questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        total++;
      }
    });

    setScore(total);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setTime(10);
    } else {
      calculateScore();
    }
  };

  if (showResult) {
    return (
      <div className="result">
        <h2>Quiz Completed</h2>
        <h3>
          Your Score: {score} / {questions.length}
        </h3>
        <h4>
          Correct: {score} | Wrong: {questions.length - score}
        </h4>
        <button onClick={() => window.location.reload()}>
          Restart
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-left">
        <h1>Quiz</h1>

        <h3 className={time <= 3 ? "timer red" : "timer"}>
          Time Left: {time} sec
        </h3>

        <div className="progress">
          <div
            className="progress-bar"
            style={{
              width: `${
                ((currentQuestion + 1) / questions.length) * 100
              }%`,
            }}
          ></div>
        </div>

        <h3>
          Question {currentQuestion + 1} / {questions.length}
        </h3>

        <h2>{questions[currentQuestion].question}</h2>

        {questions[currentQuestion].options.map((option, index) => {
          const isCorrect =
            option === questions[currentQuestion].answer;
          const isSelected = option === selected;

          return (
            <div key={index}>
              <button
                className={
                  isSelected
                    ? isCorrect
                      ? "option correct"
                      : "option wrong"
                    : "option"
                }
                onClick={() => {
                  setSelected(option);
                  setAnswers({
                    ...answers,
                    [currentQuestion]: option,
                  });
                }}
              >
                {option}
              </button>
            </div>
          );
        })}

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!selected}
        >
          {currentQuestion === questions.length - 1
            ? "Submit"
            : "Next"}
        </button>
      </div>

      <div className="quiz-right">
        <h3>Questions</h3>

        <div className="question-grid">
          {questions.map((_, index) => {
            const isAttempted = answers[index];
            const isCurrent = index === currentQuestion;

            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setTime(10);
                }}
                className={
                  isCurrent
                    ? "q-btn current"
                    : isAttempted
                    ? "q-btn attempted"
                    : "q-btn"
                }
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;