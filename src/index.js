import React from "react";
import ReactDOM from "react-dom";
import HomeScreen from "./screens/HomeScreen";
import reportWebVitals from "./reportWebVitals";

import "./styles.css";

ReactDOM.render(
    <React.StrictMode>
        <a
            href="https://github.com/pmba/sd-realtime-database"
            className="fork-me-badge"
            target="_blank"
            rel="noreferrer"
        >
            <img
                loading="lazy"
                width="149"
                height="149"
                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149"
                class="attachment-full size-full"
                alt="Fork me on GitHub"
                data-recalc-dims="1"
            />
        </a>
        <HomeScreen />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
