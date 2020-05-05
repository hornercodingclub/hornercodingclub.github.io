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

function toggleIcon() {
    if (localStorage.getItem("theme") === "light") {
        document.getElementById("theme-toggle").textContent = "🌙";
    } else if (localStorage.getItem("theme") === "dark") {
        document.getElementById("theme-toggle").textContent = "☀️";
    }
}

function toggle() {
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    }

    toggleIcon();

    document
        .getElementById("stylesheet")
        .setAttribute(
            "href",
            `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`
        );
};

window.onload = function initializeIcon() {
    toggleIcon();
    document.getElementById("theme-toggle").onclick = toggle;
}

initialize();
