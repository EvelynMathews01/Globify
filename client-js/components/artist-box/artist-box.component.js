import { AlbumItemComponent } from '../album-item/album-item.component';

export class ArtistBoxComponent {
	artist = {};

	albumsListDesktop = document.querySelector('#albums-list-desktop');
	albumsListMobile = document.querySelector('#albums');


	/**
	 * @param {Artist} artist
	 */
	constructor(artist) {
		this.artist = artist;
	}
	
	render(source) {
		let d = document.createElement('div');
		d.className = 'artist-box';

		d.innerHTML = `
		<div id="artist-item" data-id="${this.artist.id}" data-name="${this.artist.name}">
			<div class="img-box" style="background-image:url(${this.artist.image})"></div>
			<h4 class="artist-title-box">${this.artist.name}</h4>
		</div>
		`;

		const els = d.querySelectorAll('#artist-item');
		if (els.length !== 1) {
			new Error('No se encontro un unico elemento con artist-box');
		}

		//console.log(els);

		// click sobre el avatar
		els[0].addEventListener('click', event => {

			// TODO usando "document" estamos acoplandonos! evitar!
			for (let child of document.getElementsByClassName('artist-box')) {
				child.classList.remove('active');
			}

			let el = event.currentTarget;
			const artistName = el.dataset.name;
			el.classList.toggle('active');
			document.getElementById('artist-title').innerText = artistName;

			source.provider.getAlbums(el.dataset.id).then(albums => {

				this.albumsListDesktop.innerHTML = '';
				this.albumsListMobile.innerHTML = '';

				albums.forEach(album => {

					source.getTracks(album.id)
					.then(tracks => {
						album.tracks = tracks;

						this.albumsListDesktop.appendChild(new AlbumItemComponent(album).render(false));
						this.albumsListMobile.appendChild(new AlbumItemComponent(album).render(true));
					});

				});
			});

		});
		return d;


	}
}
