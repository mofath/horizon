import React from "react";
import Layout from "../../layout/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./EmployeeLetters.scss";
import ProgressTracker from "../../components/ProgressTracker/ProgressTracker";
import RequestSummary from "./RequestSummary/RequestSummary";
import RequestTracker from "./RequestTracker/RequestTracker";
import UserDocuments from "./UserDocuments/UserDocuments";
import ReleasedDocuments from "./ReleasedDocuments/ReleasedDocuments";

const EmployeeLetters: React.FC = () => {
  return (
    // <Layout>
    <div className="employee-letters-page">
      <div className="employee-letters-page__tracker-wrapper">
        <RequestTracker />
      </div>
      <div className="employee-letters-page__content">
        <PageTitle title="Employees Letters New" />
        <RequestSummary />
        <ReleasedDocuments />
        <UserDocuments />
      </div>
    </div>
    // </Layout>
  );
};

export default EmployeeLetters;
