import "../global.css";
import "../styleguide.css";
import "../global.css";
import "../styleguide.css";
import React from "react";
import ReactDOMClient from "react-dom/client";
import { Screen } from "./screens/Screen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Screen />);
