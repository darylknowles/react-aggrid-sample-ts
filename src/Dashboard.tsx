import * as React from "react";
import { withRouter } from "react-router-dom";

import { AgGridReact } from "ag-grid-react";
import PropertyDetail from "./PropertyDetail";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import AddressCell from "./AddressCell";

class Dashboard extends React.Component<
    any,
    {
        activeRecord: any;
        columnDefs: any[];
        rowData: any[];
    }
> {
    private gridApi: any = {};

    constructor(props: any) {
        super(props);

        this.state = {
            activeRecord: {},
            columnDefs: [
                { headerName: "UID", field: "uid", checkboxSelection: true, width: 140 },
                { headerName: "County", field: "county", width: 120 },
                { headerName: "Cause #", field: "cause_nbr", width: 120 },
                { headerName: "Sale Date", field: "sale_date", width: 120 },
                { headerName: "Status", field: "status", width: 140 },
                { headerName: "Account #", field: "account_nbr", width: 120 },
                {
                    children: [
                        {
                            cellRenderer: "addressCellRenderer",
                            columnGroupShow: "closed",
                            headerName: "",
                            suppressFilter: true,
                            suppressSorting: true,
                        },
                        {
                            columnGroupShow: "open",
                            field: "prop_address_one",
                            headerName: "Address 1",
                        },
                        {
                            columnGroupShow: "open",
                            field: "prop_address_two",
                            headerName: "Address 2",
                        },
                        {
                            columnGroupShow: "open",
                            field: "prop_city",
                            headerName: "City",
                        },
                        {
                            columnGroupShow: "open",
                            field: "prop_state",
                            headerName: "State",
                        },
                        {
                            columnGroupShow: "open",
                            field: "prop_zipcode",
                            headerName: "Zip",
                        },
                    ],
                    headerName: "Property Address",
                },
                { headerName: "Value", field: "value", width: 100 },
                { headerName: "Minimum", field: "minimum_bid", width: 100 },
                { headerName: "Sale Notes", field: "sale_notes" },
                { headerName: "Court #", field: "details.court_nbr", width: 100 },
                { headerName: "Precinct", field: "details.precinct", width: 100 },
                { headerName: "Style", field: "details.case_style" },
                { headerName: "School District", field: "details.school_district" },
                { headerName: "Excess Amount", field: "ExcessAmount", width: 120 },
                { headerName: "Balance", field: "balance", width: 120 },
            ],
            rowData: [],
        };
    }

    public componentDidMount = () => {
        if (this.props.properties.length === 0) {
            this.props.loadPropertyData(this.UpdateTableData);
        }
    }

    public UpdateTableData = (data: any) => {
        this.setState(
            {
                rowData: data,
            },
            () => {
                const filterModel = {
                    county: {
                        filter: "Tarrant County",
                        type: "equals",
                    },
                };
                this.gridApi.setFilterModel(filterModel);
            },
        );
    }

    public onButtonClick = (e: any) => {
        const selectedNodes = this.gridApi.getSelectedNodes();
        const selectedData = selectedNodes.map((node: any) => node.data);
        const selectedDataStringPresentation = selectedData.map((node: any) => node.uid).join(", ");
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    public onRowClicked = (node: any) => {
        this.setState({
            activeRecord: node.data,
        });
    }

    public setGridApi = (params: any) => {
        this.gridApi = params.api;
    }

    public render = () => {
        return (
            <div>
                <h1>The Dashboard</h1>
                <hr />
                <div className="ag-theme-balham" style={{ fontSize: "9pt", height: "50vh" }}>
                    <button onClick={this.onButtonClick}>Get selected rows</button>
                    <AgGridReact
                        enableColResize={true}
                        reactNext={true}
                        onGridReady={this.setGridApi}
                        enableSorting={true}
                        enableFilter={true}
                        rowSelection="multiple"
                        onRowClicked={this.onRowClicked}
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        rowHeight={25}
                        frameworkComponents={{
                             addressCellRenderer: AddressCell,
                        }}
                    />
                    <PropertyDetail {...this.state.activeRecord} />
                </div>
            </div>
        );
    }
}

export default withRouter(Dashboard);
