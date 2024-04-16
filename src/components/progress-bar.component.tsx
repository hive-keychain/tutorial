import { useEffect, useState } from "react";

interface Props {
  value: number;
}

const ProgressBar = ({ value }: Props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value > 100 ? 100 : value < 0 ? 0 : value);
  }, [value]);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="progress-value">{progress}%</div>
    </div>
  );
};

export const ProgressBarComponent = ProgressBar;
