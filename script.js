
/* =====================================================
   VICHARKRANTI YUVA VAKTA 2027
   COMPLETE WEBSITE JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. SELECT ELEMENTS
    ========================================= */

    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    const closeBtn = document.querySelector(".sidebar-close");
    const backToTop = document.querySelector(".back-to-top");

    /* =========================================
       2. SIDEBAR OPEN FUNCTION
    ========================================= */

    function openSidebar() {

        if (!sidebar || !overlay) return;

        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.classList.add("menu-open");

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "true");
        }

        sidebar.setAttribute("aria-hidden", "false");

        if (closeBtn) {
            closeBtn.focus();
        }
    }

    /* =========================================
       3. SIDEBAR CLOSE FUNCTION
    ========================================= */

    function closeSidebar() {

        if (!sidebar || !overlay) return;

        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("menu-open");

        if (menuBtn) {
            menuBtn.setAttribute("aria-expanded", "false");
        }

        sidebar.setAttribute("aria-hidden", "true");

        if (menuBtn) {
            menuBtn.focus();
        }
    }

    /* =========================================
       4. MENU BUTTON CLICK
    ========================================= */

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            if (sidebar && sidebar.classList.contains("active")) {
                closeSidebar();
            } else {
                openSidebar();
            }

        });

    }

    /* =========================================
       5. CLOSE BUTTON CLICK
    ========================================= */

    if (closeBtn) {

        closeBtn.addEventListener("click", function () {
            closeSidebar();
        });

    }

    /* =========================================
       6. OUTSIDE CLICK CLOSE
    ========================================= */

    if (overlay) {

        overlay.addEventListener("click", function () {
            closeSidebar();
        });

    }

    /* =========================================
       7. ESCAPE KEY CLOSE
    ========================================= */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            sidebar &&
            sidebar.classList.contains("active")
        ) {
            closeSidebar();
        }

    });

    /* =========================================
       8. CLOSE MENU AFTER NAVIGATION
    ========================================= */

    if (sidebar) {

        const sidebarLinks = sidebar.querySelectorAll("a");

        sidebarLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                closeSidebar();

            });

        });

    }

    /* =========================================
       9. ACTIVE MENU HIGHLIGHT
    ========================================= */

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    const navLinks = document.querySelectorAll(
        ".sidebar-nav a, .footer-links a"
    );

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (!linkPage) return;

        const cleanLink = linkPage.split("#")[0];

        if (
            cleanLink === currentPage ||
            (
                currentPage === "" &&
                cleanLink === "index.html"
            )
        ) {

            link.classList.add("active");

            if (link.closest(".sidebar-nav")) {
                link.setAttribute("aria-current", "page");
            }

        }

    });

    /* =========================================
       10. SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });

    }

    /* =========================================
       11. BACK TO TOP BUTTON
    ========================================= */

    function handleScroll() {

        if (!backToTop) return;

        if (window.scrollY > 350) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener("scroll", handleScroll, {
        passive: true
    });

    handleScroll();

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

    /* =========================================
       12. SMOOTH INTERNAL SCROLLING
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* =========================================
       13. AUTO UPDATE COPYRIGHT YEAR
    ========================================= */

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {

        element.textContent = new Date().getFullYear();

    });

    /* =========================================
       14. REGISTRATION BUTTON
    ========================================= */

    const registrationButtons = document.querySelectorAll(
        ".registration-btn"
    );

    const registrationLink =
        "https://forms.gle/ybr4o64BgDx9uYzj6";

    registrationButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.open(
                registrationLink,
                "_blank",
                "noopener,noreferrer"
            );

        });

    });

    /* =========================================
       15. IMAGE LOAD EFFECT
    ========================================= */

    const images = document.querySelectorAll("img");

    images.forEach(function (img) {

        if (img.complete) {
            img.classList.add("loaded");
        } else {

            img.addEventListener("load", function () {
                img.classList.add("loaded");
            });

        }

    });

    /* =========================================
       16. PREVENT EMPTY LINKS
    ========================================= */

    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });

    /* =========================================
       17. CONSOLE MESSAGE
    ========================================= */

    console.log(
        "विचारक्रांती युवा वक्ता 2027 वेबसाइट सुरू झाली!"
    );

});
