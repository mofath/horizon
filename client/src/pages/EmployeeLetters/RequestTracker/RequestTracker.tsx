import ProgressTracker from "../../../components/ProgressTracker/ProgressTracker";
import "./RequestTracker.scss";

interface RequestTrackerProps {}

const RequestTracker: React.FC<RequestTrackerProps> = ({}) => {
  return (
    <div className="request-tracker">
      <ProgressTracker vertical />
    </div>
  );
};

export default RequestTracker;
