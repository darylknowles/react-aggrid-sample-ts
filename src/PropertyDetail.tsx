import * as React from "react";

class PropertyDetail extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    public render() {
        return (
            <div>
                <h2>Detail Info</h2>
                <hr />
                {this.props.uid ? (
                    <div>
                        <div className="row">
                            <div className="col">{this.props.uid}</div>
                            <div className="col">
                                {this.props.prop_address_one}
                                <br />
                                {this.props.prop_address_two ? (
                                    <span>
                                        {this.props.prop_address_two}
                                        <br />
                                    </span>
                                ) : null}
                                {this.props.prop_city}, {this.props.prop_state} {this.props.prop_zipcode} <br />
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>No Record Selected</div>
                )}
            </div>
        );
    }
}
export default PropertyDetail;
