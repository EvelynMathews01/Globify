export class Navbar {
	static menu = document.querySelector('#menu');
	static artist = document.querySelector('#artist');
	static arrow = document.querySelector('#arrow');

	// TODO need a review
	static setWidth() {
		if (this.menu.classList.contains('open')) {
			this.artist.style.width = '50%';
			this.arrow.firstElementChild.innerText = 'keyboard_arrow_left';
		} else {
			this.artist.style.width = '65%';
			this.arrow.firstElementChild.innerText = 'keyboard_arrow_right';
		}
		if (document.documentElement.clientWidth < 400) {
			this.artist.style.width = '100%';
		}
	}
}
