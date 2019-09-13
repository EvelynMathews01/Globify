import { ArtistBoxComponent } from '../artist-box/artist-box.component';

export class ArtistsListComponent {
	artists = [];

	/**
	 * @param {Artist[]} artists
	 */
	constructor(artists) {
		this.artists = artists;
	}

	render(source) {
		let d = document.createElement('div');

		this.artists.forEach(artist => {
			d.appendChild(new ArtistBoxComponent(artist).render(source));
		});

		return d;
	}
}
