import PageTitle from "../../components/PageTitle/PageTitle";
import PurchaseInfoTable from "./PurchaseInfoTable/PurchaseInfoTable";
import "./PurchaseDetails.scss";
import PurchaseTracker from "./PurchaseTracker/PurchaseTracker";

interface PurchaseDetailsProps {}

const PurchaseDetails: React.FC<PurchaseDetailsProps> = ({}) => {
  return (
    <div className="purchase-details-page">
      <div className="purchase-details-page__purchase-tracker-wrapper">
        <PurchaseTracker />
      </div>
      <div className="purchase-details-page__content">
        <PageTitle title="New" />
        <div className="purchase-details-page__purchase-info-wrapper">
        <PurchaseInfoTable />
        </div>
      </div>
    </div>
  );
};

export default PurchaseDetails;
