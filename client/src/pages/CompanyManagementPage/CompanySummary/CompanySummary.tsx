import employeeImg from "../../../assets/images/employees.png";
import userImg from "../../../assets/images/user.png";
import docImg from "../../../assets/images/document.png";
import fileImg from "../../../assets/images/file.png";
import "./CompanySummary.scss";

interface CompanySummaryProps {}

const CompanySummary: React.FC<CompanySummaryProps> = ({}) => {
  return (
    <div className="company-summary">
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Key Stakeholders</div>
          <div className="company-summary__number">35</div>
        </div>
        <div className="company-summary__img">
          <img src={employeeImg} alt="Your Image" />
        </div>
      </div>
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Documents</div>
          <div className="company-summary__number">75</div>
        </div>
        <div className="company-summary__img">
          <img src={docImg} alt="Your Image" />
        </div>
      </div>
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Allocated Visa(s)</div>
          <div className="company-summary__number">9</div>
        </div>
        <div className="company-summary__img">
          <img src={fileImg} alt="Your Image" />
        </div>
      </div>
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Available Visa(s)</div>
          <div className="company-summary__number">7</div>
        </div>
        <div className="company-summary__img">
          <img src={fileImg} alt="Your Image" />
        </div>
      </div>
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Used Visa(s)</div>
          <div className="company-summary__number">7</div>
        </div>
        <div className="company-summary__img">
          <img src={fileImg} alt="Your Image" />
        </div>
      </div>
      <div className="company-summary__item">
        <div className="company-summary__data">
          <div className="company-summary__text">Employees</div>
          <div className="company-summary__number">109</div>
        </div>
        <div className="company-summary__img">
          <img src={userImg} alt="Your Image" />
        </div>
      </div>
    </div>
  );
};

export default CompanySummary;
