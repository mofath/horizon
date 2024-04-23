import React from "react";
import Layout from "../../layout/Layout/Layout";
import "./EmployeeManagementPage.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const EmployeeManagementPage: React.FC = () => {
  return (
    <Layout>
      <PageTitle title="Employee Management" />
    </Layout>
  );
};

export default EmployeeManagementPage;
