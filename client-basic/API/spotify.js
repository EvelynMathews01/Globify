import { Utils } from '../common';
import { User, Artist, Album, Track } from '../entities';

export class Spotify {
	url_base = 'https://api.spotify.com/v1';
	headers = {};

	constructor(token) {
		console.log('spotify:constructor');
		this.headers = {
			'Authorization': `Bearer ${token}`
		};
	}

	getUser() {
		return Utils.xhr(
			`${this.url_base}/me`,
			{headers: this.headers})
		.then(user => {
			return new User(user.display_name, user.country, user.email);
		});
	}

	getArtist(id) {
		return Utils.xhr(
			`${this.url_base}/artists/${id}?market=ar`,
			{headers: this.headers})
		.then(artist => {
			return new Artist(artist.name, artist.images[0].url);
		});
	}

	getAlbums(id) {
		return Utils.xhr(
			`${this.url_base}/artists/${id}/albums?market=ar`,
			{headers: this.headers})
		.then(albums => {
			return albums.items.map(album => {
				return new Album(album.name, album.images[0].url);
			});
		});
	}

	getTracks(id) {
		return Utils.xhr(
			`${this.url_base}/albums/${id}/tracks?market=ar`,
			{headers: this.headers})
		.then(tracks => {
			return tracks.items.map(track => {
				return new Track(track.name, track.track_number);
			});
		});
	}
}
