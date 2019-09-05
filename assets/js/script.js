const showMenu = (toggleId, navId) => {
    const toggleID = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        body = document.getElementById('body');
    if (toggleID && nav) {
        toggleID.addEventListener('click', () => {
            toggleID.classList.toggle('change');
            nav.classList.toggle('show');
            if (nav.classList.contains('show')){
                body.style.overflow = 'hidden';
            }else{
                body.style.overflow = 'auto';
            }
        });
    }
}

showMenu('header__menu__toggle', 'header__nav');


