import React from "react";
import Layout from "../../layout/Layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import StatsSummary from "./StatsSummary/StatsSummary";
import Tasks from "./Tasks/Tasks";
import Activities from "./Activities/Activities";
import "./OverviewPage.scss";

const OverviewPage: React.FC = () => {
  return (
    <Layout>
      <div className="overview-page">
        <PageTitle title="Overview" />
        <div className="overview-page__content">
          <StatsSummary />
          <div className="overview-page__lower-section">
            <div className="overview-page__tasks-wrapper">
              <Tasks />
            </div>
            <div className="overview-page__activities-wrapper">
              <Activities />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OverviewPage;
