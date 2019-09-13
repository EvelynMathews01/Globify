import { Utils, config } from '../common/';
import { User, Artist, Album, Track } from '../entities';

export class Spotify {
	url_base = config.spotify.api;
	headers = {};

	constructor(token) {
		this.headers = {
			'Authorization': `Bearer ${token}`
		};
	}

	getImage(resource) {
		let img = 'assets/img/no-image.png';

		if (resource.images.length > 0) {
			img = resource.images[0].url;
		}

		return img;
	}

	getUser() {
		return Utils.xhr(
			`${this.url_base}/me`,
			{headers: this.headers})
		.then(user => {
			return new User(user.id, user.display_name, this.getImage(user));
		});
	}

	getTopArtistsFromUser() {
		return Utils.xhr(
			`${this.url_base}/me/top/artists`,
			{headers: this.headers})
		.then(artists =>
			artists.items.map(artist => {
				return new Artist(artist.id, artist.name, this.getImage(artist));
			})
		);
	}

	getArtist(artist_id) {
		return Utils.xhr(
			`${this.url_base}/artists/${artist_id}?market=ar`,
			{headers: this.headers})
		.then(artist => {
			return new Artist(artist.id, artist.name, this.getImage(artist));
		});
	}

	getAlbums(artist_id) {
		return Utils.xhr(
			`${this.url_base}/artists/${artist_id}/albums?market=ar`,
			{headers: this.headers})
		.then(albums => albums.items.map(album => {
			return new Album(album.id, album.name, this.getImage(album));
		}));
	}

	getTracks(album_id) {
		return Utils.xhr(
			`${this.url_base}/albums/${album_id}/tracks`,
			{headers: this.headers})
		.then(tracks => tracks.items.map(track => {
			return new Track(track.id, track.name, track.track_number, track.duration_ms);
		}));
	}

	search(input) {
		return Utils.xhr(
			`${this.url_base}/search?q=${input}&type=artist`,
			{ headers: this.headers })
		.then((data) =>
			data.artists.items.map(artist => {
				return new Artist(artist.id, artist.name, this.getImage(artist));
			})
		);
	}
}
