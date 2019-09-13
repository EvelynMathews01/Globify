import { Spotify } from './spotify';
import { Deezer } from './deezer';
import { Grooveshark } from './grooveshark';

export class Source {
	provider = {};
	options = {
		provider: 'spotify',
		token: ''
	};

	constructor(options) {
		this.options = Object.assign({}, this.options, options);

		switch (this.options.provider) {
			case 'spotify':
				this.provider = new Spotify(this.options.token);
				break;
			case 'deezer':
				this.provider = new Deezer();
				break;
			case 'grooveshark':
				this.provider = new Grooveshark();
				break;
			default:
				console.error('Provider name wrong!');
		}
	}

	/**
	 * return the current user
	 *
	 * @returns User
	 */
	getUser() {
		return this.provider.getUser();
	}

	/**
	 * return the top artist from the user
	 * @returns {Artist[]}
	 */
	getTopArtistsFromUser() {
		return this.provider.getTopArtistsFromUser();
	}

	/**
	 * return artist info by an artist sent
	 *
	 * @param artist_id
	 * @returns {Artist}
	 */
	getArtist(artist_id) {
		return this.provider.getArtist(artist_id);
	}


	/**
	 * return albums by an artist sent
	 *
	 * @param artist_id
	 * @returns {Album[]}
	 */
	getAlbums(artist_id) {
		return this.provider.getAlbums(artist_id);
	}

	/**
	 * return tracks by an album sent
	 *
	 * @param album_id
	 * @returns {Track[]}
	 */
	getTracks(album_id) {
		return this.provider.getTracks(album_id);
	}

	/**
	 * return smth
	 *
	 * @param value
	 * @returns {*}
	 */
	search(value) {
		return this.provider.search(value);
	}

}
