import React from "react";
import ReactDOMClient from "react-dom/client";
import { OpenPage } from "./screens/OpenPage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<OpenPage />);
