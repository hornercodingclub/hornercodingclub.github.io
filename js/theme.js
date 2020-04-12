function initialize() {
    if (
        !localStorage.getItem("theme") ||
        (localStorage.getItem("theme") !== "light" &&
            localStorage.getItem("theme") !== "dark")
    ) {
        localStorage.setItem("theme", "light");
    }

    let stylesheet = document.createElement("link");
    stylesheet.setAttribute(
        "href",
        `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`
    );
    stylesheet.setAttribute("type", "text/css");
    stylesheet.setAttribute("rel", "stylesheet");
    stylesheet.setAttribute("id", "stylesheet");

    document.head.appendChild(stylesheet);
}

window.toggleTheme = function toggle() {
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    }

    document
        .getElementById("stylesheet")
        .setAttribute(
            "href",
            `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`
        );
};

initialize();
