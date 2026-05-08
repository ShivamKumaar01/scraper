import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import { StoryProvider } from "./context/story-context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <AuthProvider>
    <StoryProvider>
      <App />
    </StoryProvider>
    </AuthProvider>
  </BrowserRouter>,
);
