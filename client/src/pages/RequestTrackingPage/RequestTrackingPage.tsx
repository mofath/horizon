import React from "react";
import Layout from "../../layout/Layout/Layout";
import "./RequestTrackingPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";
import RequestsTable from "./RequestsTable/RequestsTable";

const RequestTrackingPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <PageTitle title="Request Tracking" />
        <RequestsTable />
      </div>
    </Layout>
  );
};

export default RequestTrackingPage;
