import { ReactComponent as RequestIcon } from "../../../assets/icons/request.svg";
import { ReactComponent as SubmissionDateIcon } from "../../../assets/icons/submission-date.svg";
import { ReactComponent as FeesIcon } from "../../../assets/icons/fees.svg";
import { ReactComponent as CompletionDateIcon } from "../../../assets/icons/completion-date.svg";
import { Link } from "react-router-dom";
import "./RequestSummary.scss";

const RequestSummary = () => {
  return (
    <div className="request-summary">
      <div className="request-summary__items">
        <div className="request-summary__item">
          <div className="request-summary__item__label">
            <i>
              <RequestIcon />
            </i>
            Request Number
          </div>
          <div className="request-summary__item__value">#12552233</div>
        </div>
        <div className="request-summary__item">
          <div className="request-summary__item__label">
            <i>
              <SubmissionDateIcon />
            </i>
            Submission Date
          </div>
          <div className="request-summary__item__value">1/2/2024</div>
        </div>
        <div className="request-summary__item">
          <div className="request-summary__item__label">
            <i>
              <FeesIcon />
            </i>
            Fees
          </div>
          <div className="request-summary__item__value">
            AED 162.12
          </div>
        </div>
        <div className="request-summary__item">
          <div className="request-summary__item__label">
            <i>
              <CompletionDateIcon />
            </i>
            Completion Estimate
          </div>
          <div className="request-summary__item__value">5 Days</div>
        </div>
      </div>
      <div className="request-summary__link">
      <Link to="/">View Submited Data</Link>
      </div>
    </div>
  );
};

export default RequestSummary;
