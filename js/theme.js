"use strict";
const initialize = () => {
    const theme = localStorage.getItem("theme");
    if (theme !== "light" && theme !== "dark") {
        localStorage.setItem("theme", "light");
    }
    toggleStyle();
    window.addEventListener("load", () => {
        var _a;
        toggleIcon();
        (_a = document
            .getElementById("theme-toggle")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggle);
    });
};
const toggleIcon = () => {
    const themeToggle = document.getElementById("theme-toggle");
    const theme = localStorage.getItem("theme");
    if (themeToggle === null) {
        return;
    }
    if (theme === "light") {
        themeToggle.textContent = "🌙";
    }
    else if (theme === "dark") {
        themeToggle.textContent = "☀️";
    }
};
const toggleStyle = () => {
    const oldStyle = document.getElementById("stylesheet");
    const newStyle = document.createElement("link");
    newStyle.href = `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`;
    newStyle.type = "text/css";
    newStyle.rel = "stylesheet";
    if (oldStyle === null) {
        document.head.prepend(newStyle);
    }
    else {
        oldStyle.after(newStyle);
    }
    setTimeout(() => {
        if (oldStyle !== null) {
            oldStyle.remove();
        }
        newStyle.id = "stylesheet";
    }, 200);
};
const toggle = () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
        localStorage.setItem("theme", "dark");
    }
    else if (theme === "dark") {
        localStorage.setItem("theme", "light");
    }
    toggleIcon();
    toggleStyle();
};
initialize();
