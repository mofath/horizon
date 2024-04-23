import { AgGridReact } from "ag-grid-react";
import { ColDef, GridOptions } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./DataGrid.scss";

export interface DataGridProps extends GridOptions {
  isLoading?: boolean;
  columns: ColDef[];
  rows: any[];
  rowHeight?: number;
  pagination?: boolean;
  totalPages?: number;
  totalCount?: number;
  rowsPerPage?: number;
  currentPage?: number;
  handlePageChange?: (newPage: number) => void;
}

const DataGrid: React.FC<DataGridProps> = ({
  isLoading = false,
  columns,
  rows,
  pagination = true,
  totalPages = 0,
  totalCount = 0,
  rowsPerPage = 0,
  currentPage = 0,
  rowHeight,
  handlePageChange,
  onFilterChanged,
  ...restProps
}) => {

  return (
    <div className={"data-grid"}>
      <div
        className={`ag-theme-alpine ${
          pagination ? "data-grid__table" : "data-grid__table--no-footer"
        }`}
      >
        {/* {isLoading && <LinearProgress variant="indeterminate" />} */}
        <AgGridReact
      // ref={gridRef}
      rowData={rows}
      columnDefs={columns}
      defaultColDef={{
        filter: false,
        sortable: false,
        resizable: false,
      }}
      suppressFieldDotNotation
      suppressCopyRowsToClipboard
      suppressAggFuncInHeader
      enableCellTextSelection
      ensureDomOrder
      suppressMenuHide
      animateRows={false}
      headerHeight={32}
      rowHeight={rowHeight}
      overlayNoRowsTemplate="No data"
      {...restProps}
    />
      </div>
    </div>
  );
};

export default DataGrid;
