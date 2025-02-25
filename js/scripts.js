// Kode untuk slider
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

if (nextButton && prevButton) {
    nextButton.onclick = function () {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').appendChild(lists[0]);
    }

    prevButton.onclick = function () {
        let lists = document.querySelectorAll('.item');
        document.getElementById('slide').prepend(lists[lists.length - 1]);
    }
}

// Kode untuk menu drawer
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const menuDrawer = document.getElementById("menu-drawer");
const menuOverlay = document.getElementById("menu-overlay");
const closeMenu = document.getElementById("close-menu");

function toggleMenu() {
    if (menuDrawer.classList.contains("translate-x-full")) {
        menuDrawer.classList.remove("translate-x-full");
        menuDrawer.classList.add("translate-x-0");
        menuOverlay.classList.remove("hidden");
    } else {
        menuDrawer.classList.remove("translate-x-0");
        menuDrawer.classList.add("translate-x-full");
        menuOverlay.classList.add("hidden");
    }
}

mobileMenuToggle.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);
menuOverlay.addEventListener("click", toggleMenu);