import { ReactComponent as EmployeesIcon } from "../../../assets/icons/employees.svg";
import { ReactComponent as BookingsIcon } from "../../../assets/icons/bookings.svg";
import { ReactComponent as InvoicesIcon } from "../../../assets/icons/invoices.svg";
import { ReactComponent as TasksIcon } from "../../../assets/icons/tasks.svg";
import { ReactComponent as DocumentsIcon } from "../../../assets/icons/documents.svg";
import Icon from "../../../components/Icon/Icon";
import "./StatsSummary.scss";

interface StatsSummaryProps {}

const StatsSummary: React.FC<StatsSummaryProps> = ({}) => {
  return (
    <div className="stats-summary">
      <div className="stats-summary__item">
        <div className="stats-summary__data">
          <div className="stats-summary__text">Documents</div>
          <div className="stats-summary__number">40689</div>
        </div>
        <div className="stats-summary__icon" style={{ background: "#e4e4ff" }}>
          <Icon icon={DocumentsIcon} />
        </div>
      </div>
      <div className="stats-summary__item">
        <div className="stats-summary__data">
          <div className="stats-summary__text">Open Tasks</div>
          <div className="stats-summary__number">102293</div>
        </div>
        <div className="stats-summary__icon" style={{ background: "#fef2d6" }}>
          <Icon icon={TasksIcon} />
        </div>
      </div>
      <div className="stats-summary__item">
        <div className="stats-summary__data">
          <div className="stats-summary__text">Invoices</div>
          <div className="stats-summary__number">8800</div>
        </div>

        <div className="stats-summary__icon" style={{ background: "#d9f7e7" }}>
          <Icon icon={InvoicesIcon} />
        </div>
      </div>
      <div className="stats-summary__item">
        <div className="stats-summary__data">
          <div className="stats-summary__text">Facility Bookings</div>
          <div className="stats-summary__number">2040</div>
        </div>
        <div className="stats-summary__icon" style={{ background: "#e4e4ff" }}>
          <Icon icon={BookingsIcon} />
        </div>
      </div>
      <div className="stats-summary__item">
        <div className="stats-summary__data">
          <div className="stats-summary__text">Employees</div>
          <div className="stats-summary__number">3050</div>
        </div>
        <div className="stats-summary__icon" style={{ background: "#ececec" }}>
          <Icon icon={EmployeesIcon} />
        </div>
      </div>
    </div>
  );
};

export default StatsSummary;
