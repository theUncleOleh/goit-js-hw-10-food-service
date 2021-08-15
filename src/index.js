// import './sass/main.scss';
import menuTpl from './templates/menu.hbs';
import  './styles.css';
import menu  from './menu.json';
console.log(menuTpl);


const menuContainer  = document.querySelector(".js-menu");
console.log(menuContainer);
const makeMenuCard = createMenuCardMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', makeMenuCard );

function createMenuCardMarkup (menu) {
    // return  menu.map(menu => menuTpl(menu)) 
    return  menu.map(menuTpl) 
    .join('');
}
