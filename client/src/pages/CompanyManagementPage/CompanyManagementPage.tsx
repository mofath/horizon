import React from "react";
import Layout from "../../layout/Layout/Layout";
import "./CompanyManagementPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import CompanySummary from "./CompanySummary/CompanySummary";
import MenuList from "../../components/MenuList/MenuList";
import {
  AttestationTab,
  CompanyFormationTab,
  ComplianceTab,
  CorporateLettersTab,
  FacilityTab,
  MCYTab,
  BusinessLicenseTab,
  NameReservationTab,
  PreApprovalTab,
} from "./CompanyManagementTabs";

const CompanyManagementPage: React.FC = () => {
  return (
    <Layout>
      <div className="company-management-page">
        <PageTitle title="Company Management" />
        <div className="company-management-page__contnet">
          <CompanySummary />
          <MenuList
            tabs={[
              "Attestation",
              "Compliance",
              "Company Formation",
              "Facility",
              "Name Reservation",
              "MCY",
              "Pre-Approval",
              "Business License",
              "Corporate Letters",
            ]}
          >
            <AttestationTab />
            <ComplianceTab />
            <CompanyFormationTab />
            <FacilityTab />
            <NameReservationTab />
            <MCYTab />
            <PreApprovalTab />
            <BusinessLicenseTab />
            <CorporateLettersTab />
          </MenuList>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyManagementPage;
