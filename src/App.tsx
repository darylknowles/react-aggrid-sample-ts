import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import {AppContext, AppProvider } from "./AppProvider";

import Dashboard from "./Dashboard";
import Layout from "./Layout";

import "./App.css";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

class App extends React.Component {

    public dashboardWithProperties(context: any) {
      return () => <Dashboard {...context} />;
    }

    public render() {
        return (
            <AppProvider>
                <AppContext.Consumer>
                    {(context) => (
                        <BrowserRouter basename={baseUrl ? baseUrl : ""}>
                            <Layout>
                                <Route exact={true} path="/" render={this.dashboardWithProperties(context)} />
                            </Layout>
                        </BrowserRouter>
                    )}
                </AppContext.Consumer>
            </AppProvider>
        );
    }
}

export default App;
