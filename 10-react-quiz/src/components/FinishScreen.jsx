import React from "react";
import { useQuiz } from "../contexts/quizContext";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎖️";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😄";
  if (percentage >= 30 && percentage < 50) emoji = "🙇‍♂️";
  if (percentage < 30) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
