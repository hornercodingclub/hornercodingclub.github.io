function initialize() {
    if (
        !localStorage.getItem("theme") ||
        (localStorage.getItem("theme") !== "light" &&
            localStorage.getItem("theme") !== "dark")
    ) {
        localStorage.setItem("theme", "light");
    }

    toggleStyle();
}

function toggleIcon() {
    if (localStorage.getItem("theme") === "light") {
        document.getElementById("theme-toggle").textContent = "🌙";
    } else if (localStorage.getItem("theme") === "dark") {
        document.getElementById("theme-toggle").textContent = "☀️";
    }
}

function toggleStyle() {
    const oldStyle = document.getElementById("stylesheet");
    const newStyle = document.createElement("link");

    newStyle.setAttribute(
        "href",
        `/css/minimal.css/minimal_${localStorage.getItem("theme")}.min.css`
    );
    newStyle.setAttribute("type", "text/css");
    newStyle.setAttribute("rel", "stylesheet");

    oldStyle.after(newStyle);

    window.setTimeout(() => {
        oldStyle.remove();
        newStyle.id = "stylesheet";
    }, 100);
}

function toggle() {
    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else if (localStorage.getItem("theme") === "dark") {
        localStorage.setItem("theme", "light");
    }

    toggleIcon();
    toggleStyle();
}

window.onload = function initializeIcon() {
    toggleIcon();
    document.getElementById("theme-toggle").onclick = toggle;
};

initialize();
