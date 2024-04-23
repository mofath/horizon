import SearchInput from "../../../../components/form/SearchInput/SearchInput";
import visaApplicationImg from "../../../../assets/images/visa-application.png";
import "./AttestationTab.scss";
import { Link } from "react-router-dom";

interface AttestationTabProps {}
const AttestationTab: React.FC<AttestationTabProps> = ({}) => {
  return (
    <div className="tab-content">
      <div className="tab-content__header">
        <p>Attestation</p>
        <SearchInput />
      </div>
      <div className="attestation-tab-content">
        <div>
          <img src={visaApplicationImg} alt="visa Application" />
        </div>
        <Link className="attestation-tab-content__certify-link" to="/">Certify</Link>
      </div>
    </div>
  );
};

export default AttestationTab;
