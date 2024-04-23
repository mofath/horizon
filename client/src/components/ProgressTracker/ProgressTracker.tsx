import React from "react";
import "./ProgressTracker.scss";

interface ProgressTrackerProps {
  vertical?: boolean;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ vertical }) => {
  const stepperClass = vertical
    ? "progress-tracker progress-tracker--vertical"
    : "progress-tracker";

  return (
    <ol className={stepperClass}>
      <li className="progress-step">Step A</li>
      <li className="progress-step">Step B</li>
      <li className="progress-step progress-step--active">Step C</li>
      <li className="progress-step">Step D</li>
      <li className="progress-step">Step E</li>
    </ol>
  );
};

export default ProgressTracker;
