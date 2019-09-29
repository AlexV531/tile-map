
/** @type {HTMLElement} */
const element = document.querySelector('.debug')

export function msg(str) {
	element.textContent = str
}