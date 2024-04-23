import { ColDef } from "ag-grid-community";
import DataGrid from "../../../components/DataGrid/DataGrid";
import SearchInput from "../../../components/form/SearchInput/SearchInput";
import "./RequestsTable.scss";

const RequestsTable = () => {
  const CenteredHeader = (props: any) => {
    return <div className="centered-header">{props.displayName}</div>;
  };
  const rowData = [
    {
      id: "",
      request: "Company Formation Setup New Company",
      aplicationName: "",
      submissionDate: "2024-04-01",
      estimatedCompletion: "2024-04-01",
      fees: 1500,
      status: "Completed",
      feedback: "bad",
      taskStatus: "",
    },
    {
      id: "",
      request: "Company Formation",
      aplicationName: "",
      submissionDate: "2024-04-02",
      estimatedCompletion: "2024-04-01",
      fees: 1500,
      status: "Pending",
      feedback: "",
      taskStatus: "",
    },
    {
      id: "",
      request: "Company Formation Setup New Company",
      aplicationName: "",
      submissionDate: "2024-04-02",
      estimatedCompletion: "2024-04-01",
      fees: 1500,
      status: "Unsubmitted",
      feedback: "bad",
      taskStatus: "",
    },
    {
      id: "",
      request: "Company Formation",
      aplicationName: "",
      submissionDate: "2024-04-02",
      estimatedCompletion: "2024-04-01",
      fees: 1500,
      status: "Pending",
      feedback: "",
      taskStatus: "",
    },
    {
      id: "",
      request: "Company Formation",
      aplicationName: "",
      submissionDate: "2024-04-02",
      estimatedCompletion: "2024-04-01",
      fees: 1500,
      status: "Pending",
      feedback: "",
      taskStatus: "",
    },
  ];

  const columnDefs: ColDef[] = [
    {
      headerName: "Request",
      field: "request",
    },
    {
      headerName: "Aplication Name",
      field: "aplicationName",
      valueGetter: (params) => {
        return params.data.aplicationName || "-";
      },
    },
    {
      headerName: "Submission Date",
      field: "submissionDate",
    },
    {
      headerName: "Estimated Completion",
      field: "estimatedCompletion",
    },
    {
      headerName: "Fees",
      field: "fees",
      valueGetter: (params) => {
        return "AED " + params.data.fees;
      },
    },
    {
      headerName: "Status",
      field: "status",
      headerComponent: CenteredHeader,
      cellStyle: { textAlign: "center" },
      cellRenderer: (params: any) => {
        const status = params.data.status;
        return (
          <div className="tasks-table__status-wrapper">
            <div
              className={`tasks-table__status tasks-table__status--${status.toLowerCase()}`}
            >
              {status}
            </div>
          </div>
        );
      },
    },
    {
      headerName: "Feedback",
      field: "feedback",
      valueGetter: (params) => {
        return params.data.feedback || "-";
      },
    },
    {
      headerName: "Task Status",
      field: "taskStatus",
      valueGetter: (params) => {
        return params.data.taskStatus || "-";
      },
    },
  ];

  return (
    <div className="requests-table">
      <div className="requests-table__header">
        <SearchInput />
        <div className="requests-table__header__text">
          {rowData?.length || 0} Total Requests
        </div>
      </div>
      <div style={{ height: "500px", width: "100%" }}>
        <DataGrid
          rows={rowData}
          columns={columnDefs}
          pagination={false}
          rowHeight={85}
        />
      </div>
    </div>
  );
};

export default RequestsTable;
