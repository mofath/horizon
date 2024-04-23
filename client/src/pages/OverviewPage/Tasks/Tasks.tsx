import Select from "../../../components/form/Select/Select";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";

import "./Tasks.scss";
import DataGrid from "../../../components/DataGrid/DataGrid";

const monthsOptions = [
  { value: "jan", label: "January" },
  { value: "feb", label: "February" },
  { value: "march", label: "March" },
];

const Tasks = () => {
  const CenteredHeader = (props: any) => {
    return <div className="centered-header">{props.displayName}</div>;
  };
  const rowData = [
    {
      id: "",
      serviceName: "Service A",
      location: "Location A",
      date: "2024-04-01",
      price: 432,
      status: "Completed",
    },
    {
      id: "",
      serviceName: "Service B",
      location: "Location B",
      date: "2024-04-02",
      price: 150,
      status: "Pending",
    },
    {
      id: "",
      serviceName: "Service B",
      location: "Location B",
      date: "2024-04-02",
      price: 560,
      status: "Unsubmitted",
    },
    {
      id: "",
      serviceName: "Service B",
      location: "Location B",
      date: "2024-04-02",
      price: 230,
      status: "Pending",
    },
  ];

  const columnDefs: ColDef[] = [
    {
      headerName: "Service name",
      field: "serviceName",
      headerClass: "temp",
      cellClass: "tasks-table__cell",
    },
    {
      headerName: "Location",
      field: "location",
      headerClass: "tasks-table__header",
      cellClass: "tasks-table__cell",
    },
    {
      headerName: "Date",
      field: "date",
      headerClass: "tasks-table__header",
      cellClass: "tasks-table__cell",
    },
    {
      headerName: "Price",
      field: "price",
      headerClass: "tasks-table__header",
      cellClass: "tasks-table__cell",
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
  ];

  return (
    <div className="tasks">
      <div className="tasks__header">
        <div className="tasks__header__title">Open Tasks</div>
        <div>
          <Select
            id="company"
            // label="Choose company"
            // placeholder="Choose company"
            options={monthsOptions}
            name="month"
            onChange={() => null}
            // {...register("company", { required: "Company selection is required" })}
            // error={errors.company}
          />
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

export default Tasks;
