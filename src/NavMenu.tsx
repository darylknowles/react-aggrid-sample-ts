import * as React from "react";
import { withRouter } from "react-router-dom";

class NavMenu extends React.Component<any, any> {
    public render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">TestApp</a>
            </nav>
        );
    }
}

export default withRouter(NavMenu);
