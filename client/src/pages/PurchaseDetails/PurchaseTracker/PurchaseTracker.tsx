import ProgressTracker from "../../../components/ProgressTracker/ProgressTracker";
import "./PurchaseTracker.scss";

interface PurchaseTrackerProps {}

const PurchaseTracker: React.FC<PurchaseTrackerProps> = ({}) => {
  return (
    <div className="purchase-tracker">
      <ProgressTracker vertical />
    </div>
  );
};

export default PurchaseTracker;
