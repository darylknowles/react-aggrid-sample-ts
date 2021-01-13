import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// Bootstrap 4 & dependencies
import "jquery/dist/jquery.slim";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "popper.js";

ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement,
);
registerServiceWorker();
