// Mobile Menu Show Hide

const showMenu = (toggleId, menuId) => {
    const toggle = document.getElementById(toggleId),
        menu = document.getElementById(menuId)

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')