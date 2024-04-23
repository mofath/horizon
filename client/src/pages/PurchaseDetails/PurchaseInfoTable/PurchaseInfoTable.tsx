import React from "react";
import { ReactComponent as PDFIcon } from "../../../assets/icons/pdf-icon.svg";
import "./PurchaseInfoTable.scss";

interface Row {
  label: string;
  value: string | React.ReactNode;
}

interface PurchaseInfoTableProps {
  // rows: Row[];
}

const PurchaseInfoTable: React.FC<PurchaseInfoTableProps> = ({ }) => {
  return (
    <>
      <section>
        <h2 className="purchase-info-table__title">Released Documents</h2>
        <div className="purchase-info-table__subtitle">
          Select Employee List
        </div>
        <InfoRow label="Select Employee List" value="Ahmed Youness" />
        <InfoRow label="Visa Holder Name" value="Youness" />
        <InfoRow label="Residence Visa Copy" value={<PDFIcon />} />
        <InfoRow label="Gender" value="Male" />
        <InfoRow label="First Name" value="Ahmed" />
        <InfoRow label="Last Name" value="Youness" />
        <InfoRow label="Contact Number" value="+971 551 588 558" />
        <InfoRow label="Email Address" value="a.gmal@gmail.com" />
        <InfoRow label="Nationality" value="Egypt" />
        <InfoRow label="Designation" value="Director" />
        <InfoRow label="Passport Number" value="755 858 855 558 885" />
        <InfoRow label="Select type of Letter" value="Salary Certificate" />
        <InfoRow label="Select Preferred Language" value="English" />
      </section>
      <section>
        <h2 className="purchase-info-table__title">Required Documents</h2>
        <InfoRow label="Select Employment Contract" value="Ahmed Youness" />
        <InfoRow label="Basic Salary" value="AED 15000" />
        <InfoRow label="Accommodation Allowance" value="Lurem" />
        <InfoRow label="Transport Allowance" value="Ipsum" />
        <InfoRow label="Meal Allowance" value="Lurem" />
        <InfoRow label="Other Allowance" value="Yes" />
        <InfoRow label="Other Benefits" value="Allowed" />
        <InfoRow label="Joining Date" value="1/2/2002" />
        <InfoRow label="Nationality" value="Egypt" />
      </section>
    </>
  );
};

const InfoRow: React.FC<Row> = ({ label, value }) => {
  return (
    <div className="purchase-info-table__row">
      <div className="purchase-info-table__header-cell">
        {label}
      </div>
      <div className="purchase-info-table__cell">{value}</div>
    </div>
  );
};

export default PurchaseInfoTable;
