import * as React from "react";
import NavMenu from "./NavMenu";

class Layout extends React.Component<any, any> {
    public render() {
        return (
            <React.Fragment>
            <div className="container-fluid">
                <NavMenu />
                <div>{this.props.children}</div>
            </div>
        </React.Fragment>
        );
    }

}

export default Layout;
