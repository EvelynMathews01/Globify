import { TracksListComponent } from '../tracks-list/tracks-list.component';

export class AlbumItemComponent {
	album = {};

	/**
	 * @param {Album} album
	 */
	constructor(album){
		this.album = album;
	}

	render(mobile){
		return mobile ? this.renderMobile() : this.renderDesktop();
	}

	renderDesktop() {
		let d = document.createElement('div');
		d.innerHTML = `
		<div class="album-item" data-id="${this.album.id}" data-name="${this.album.name}">
			<div class="album-info">
				<i class="fas fa-caret-right"></i>
				<img src="${this.album.image}" alt="album-thumbnail" width="27">
				<span>${this.album.name}</span>
			</div>
			<ul class="hide album-songs-list">
				${new TracksListComponent(this.album.tracks).render()}
			</ul>
		</div>
		`;

		const els = d.getElementsByClassName('album-item');
		if (els.length !== 1) {
			new Error('No se encontro un unico elemento con album-item');
		}
		els[0].addEventListener('click', event => {

			console.log(event.currentTarget)

			// TODO DOM!
			for (let child of document.getElementsByClassName('album-songs-list')) {
				child.classList.add('hide');
			}

			const el = event.currentTarget;
			const name = el.dataset.name;

			const tracksList = d.getElementsByClassName('album-songs-list');
			if (tracksList.length !== 1) {
				new Error('No se encontro un unico elemento con album-songs-list');
			}

			tracksList[0].classList.remove('hide');
			document.getElementById('album-title').innerText = name;
		});

		return d;
	}

	renderMobile() {
		let d = document.createElement('div');

		d.innerHTML = `
		<a href="#album-title" id="album-item">
			<div class="artist-box" id="album-info">
				<div class="img-box"
						style="background-image:url(${this.album.image})"></div>
				<h4>${this.album.name}</h4>
			</div>
		</a>
		`;

		const trackList = d.querySelectorAll('#album-item');
		trackList[0].addEventListener('click', () => {
			document.getElementById('album-title').innerHTML = this.album.name;
			document.getElementById('song-list')
			.insertAdjacentHTML('beforeend', new TracksListComponent(this.album.tracks).render());
		});

		return d;
	}
}
