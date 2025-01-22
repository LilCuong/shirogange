document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.action-menu');
    const menuItems  = document.querySelectorAll('.action-menu-item');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            menuItems.forEach(menuItem => {
                if (menuItem.contains(link)) { // Kiểm tra menu-item nào chứa link
                    menuItem.classList.add('menu-action');
                }
            });
        }
    });
});