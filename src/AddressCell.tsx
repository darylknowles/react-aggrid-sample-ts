import * as React from "react";

// As a workaround to the bug in the agGrid.d.ts file, you can just declare a class "props" to satisfy TS and
// access the implicitly passed this.props
class AddressCell extends React.Component {
    public props: any;

    public render() {
        return (
            <React.Fragment>
                <span>{this.props.data.prop_address_one} </span>
                {this.props.data.prop_address_two ? <span>{this.props.data.prop_address_two} </span> : null}
                {this.props.data.prop_city}, {this.props.data.prop_state} {this.props.data.prop_zipcode}
            </React.Fragment>
        );
    }
}

export default AddressCell;
