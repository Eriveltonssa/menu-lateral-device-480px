
function fecharMenu() {
    let navMenu = document.getElementById('nav-menu');
    let divClose = document.getElementById('div-close');

    navMenu.style.display = 'none';
    divClose.style.display = 'none';

    const body = document.body;
    body.classList.remove('menu-aberto');
}

function abrirMenu() {
    let navMenu = document.getElementById('nav-menu');
    let divClose = document.getElementById('div-close');

    navMenu.style.display = 'flex';
    divClose.style.display = 'flex';

    const body = document.body;
    body.classList.add('menu-aberto');
}



function feclarMenuDevice(){
    let navMenu = document.getElementById(`nav-menu`)
    let divClose = document.getElementById(`div-close`)

    if(navMenu.style.display === 'flex' || navMenu.style.display ===''){
        navMenu.style.display = 'none'
        divClose.style.display = 'none'
    }
    else{
        navMenu.style.display =' flex'
        divClose.style.display = 'flex'
    }
}


