// import './sass/main.scss';
// import menuFirst from './templates/menu.hbs';
import menuTpl from './templates/menuTpl.hbs';
import  './styles.css';
import menu  from './menu.json';
// console.log(menuFirst);
// console.log(menuTpl);
// console.log(menuTpl(menu));
const menuContainer  = document.querySelector(".js-menu");
// // console.log(menuContainer);
const makeMenuCard = createMenuCardMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', makeMenuCard );

function createMenuCardMarkup (menu) {
    // return  menu.map(menu => menuTpl(menu)) 
    // return  menu.map(menuFirst) 
    // .join('');
    return menuTpl(menu);
}
