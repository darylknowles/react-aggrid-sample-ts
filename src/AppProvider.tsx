import * as React from "react";

import * as axios from "axios";

export const AppContext = React.createContext({
    properties: [],
});

export class AppProvider extends React.Component<{}, { properties: any[] }> {
    public state = {
        loadPropertyData: (callback: any) => {
            if (this.state.properties.length === 0) {
                axios.default
                    .get("data/propertydata.json")
                    .then((response: any) => {
                        this.setState(
                            {
                                properties: response.data,
                            },
                            () => {
                                callback(this.state.properties);
                            },
                        );
                    })
                    .catch((error: any) => {
                        alert("Error " + error);
                    });
            } else {
                callback(this.state.properties);
            }
        },
        properties: [],
    };

    public render() {
        return <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>;
    }
}
