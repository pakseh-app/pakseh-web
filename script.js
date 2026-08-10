// ======================================================
// PAKSEH.WEB.ID
// Theme + Mobile Sidebar
// ======================================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


// ======================================================
// MOBILE SIDEBAR
// ======================================================

if (menuToggle && sidebar && sidebarOverlay) {

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        sidebarOverlay.classList.toggle("show");
    });

    sidebarOverlay.addEventListener("click", () => {
        sidebar.classList.remove("open");
        sidebarOverlay.classList.remove("show");
    });

}


// ======================================================
// THEME
// ======================================================

const savedTheme = localStorage.getItem("siteTheme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}


// ======================================================
// THEME BUTTON
// ======================================================

const themeToggle = document.getElementById("themeToggle");

function updateThemeButton() {

    if (!themeToggle) {
        return;
    }

    if (document.body.classList.contains("light-theme")) {

        themeToggle.innerHTML = "☀";

        themeToggle.title = "Tema terang";

    } else {

        themeToggle.innerHTML = "☾";

        themeToggle.title = "Tema gelap";

    }

}


updateThemeButton();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "siteTheme",
            isLight ? "light" : "dark"
        );

        updateThemeButton();

    });

}