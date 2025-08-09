import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// routeing
import { BrowserRouter } from "react-router";
// google auth provider
import { GoogleOAuthProvider } from "@react-oauth/google";
const CLIENT_ID =
    "232138544247-2mjvq8so7mmriiauq995kf6hqve7hsh6.apps.googleusercontent.com";
// redux
import { Provider } from "react-redux";
import Store from "./Redux/Store.js";
createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <Provider store={Store}>
                <App />
            </Provider>
        </GoogleOAuthProvider>
    </BrowserRouter>
);
