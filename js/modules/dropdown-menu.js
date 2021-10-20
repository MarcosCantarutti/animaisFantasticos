// dropdow menu
import outsideClick from "./outsideclick.js";
import {arrayEvents} from "./outsideclick.js";


export default function initDropdownMenu() {

const dropdownMenus = document.querySelectorAll('[data-dropdown]');


dropdownMenus.forEach(menu => {

    arrayEvents.forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    });

});

function handleClick (event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, () => {
        this.classList.remove('active');
    });
}



};