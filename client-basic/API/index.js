// NO EXPORT!
import { Spotify } from './spotify';
import { Deezer } from './deezer';
import { Grooveshark } from './grooveshark';

export default class Source {
	provider = {};
	options = {
		provider: 'spotify',
		token: ''
	};

	constructor(options){
		this.options = Object.assign({}, this.options, options);

		switch (this.options.provider) {
		case 'spotify': 		this.provider = new Spotify(this.options.token); break;
		case 'deezer': 			this.provider = new Deezer(); break;
		case 'grooveshark':	this.provider = new Grooveshark(); break;
		default:
			console.error('Provider name wrong!');
		}
	}

	getUser(){
		return this.provider.getUser();
	}

	getArtist(id){
		return this.provider.getArtist(id);
	}

	getAlbums(id){
		return this.provider.getAlbums(id);
	}

	getTracks(id){
		return this.provider.getTracks(id);
	}

}
