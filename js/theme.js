function initialize() {
    if (
        !localStorage.getItem("theme") ||
        (localStorage.getItem("theme") !== "light" &&
            localStorage.getItem("theme") !== "dark")
    ) {
        localStorage.setItem("theme", "light");
    }

    document.getElementById("stylesheet").setAttribute(
        "href",
        `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`
    );
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
