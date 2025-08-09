// ================================
// Importing required libraries
// ================================
import { motion } from "motion/react";
import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

// ================================
// Importing Hooks
// ================================
import { useState } from "react";

// ================================
// Animation settings
// ================================
import { animateOpacity, transitionSettings } from "../../utils/animations";

// ================================
// Index  Component
// ================================
function Index() {
    const [activeTab, setActiveTab] = useState("html");
    const [htmlCode, setHtmlCode] = useState("<h1>مرحبا بالعالم</h1>");
    const [cssCode, setCssCode] = useState(
        "h1 { color: red; text-align: center; }"
    );

    const srcDoc = `
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
            </body>
        </html>
    `;

    const getExtensions = () => {
        switch (activeTab) {
            case "html":
                return [html()];
            case "css":
                return [css()];
            default:
                return [];
        }
    };

    const getValue = () => {
        switch (activeTab) {
            case "html":
                return htmlCode;
            case "css":
                return cssCode;
            default:
                return "";
        }
    };

    const setValue = (value) => {
        switch (activeTab) {
            case "html":
                setHtmlCode(value);
                break;
            case "css":
                setCssCode(value);
                break;
            default:
                break;
        }
    };
    return (
        <motion.div
            className="grid  xl:grid-cols-2  gap-5 overflow-hidden"
            initial={"hidden"}
            whileInView={"show"}
            variants={animateOpacity}
            transition={transitionSettings}
        >
            {/* Editor with Tabs*/}
            <div>
                {/* Tabs */}
                <div className="grid grid-cols-2 items-center bg-gray-900 text-white">
                    {["html", "css"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-5 transition-colors cursor-pointer ${
                                activeTab === tab
                                    ? "bg-gray-800"
                                    : "hover:bg-gray-800"
                            }`}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Editor */}
                <CodeMirror
                    value={getValue()}
                    height="600px"
                    width="100%"
                    maxWidth="900px"
                    extensions={getExtensions()}
                    onChange={(value) => setValue(value)}
                    theme="dark"
                    style={{ direction: "ltr", textAlign: "left" }}
                />
            </div>

            {/* Preview Code */}
            <iframe
                srcDoc={srcDoc}
                title="preview"
                sandbox="allow-scripts"
                frameBorder="0"
                style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "600px",
                    backgroundColor: "#101828",
                }}
            />
        </motion.div>
    );
}

export default Index;
