import Source from './API';

export default class App {
	// DOM:
	loading = document.getElementById('loading');
	content = document.getElementById('content');
	display_name = document.getElementById('display_name');
	country = document.getElementById('country');
	email = document.getElementById('email');
	artist = document.getElementById('artist');
	artist_img = document.getElementById('artist_img');
	albums = document.getElementById('albums');
	tracks = document.getElementById('tracks');

	_loading = true;
	source = {};

	constructor() {
		// Do not support by IE... una pena
		const urlParams = new URLSearchParams(location.search);
		let token = urlParams.get('t');

		// probablemente esta configuracion venga de afuera
		this.source = new Source({
			// provider: 'deezer',
			token
		});

		this.getData();
	}

	getData() {
		Promise.all([

			this.source.getUser().then((data) => {
				this.display_name.innerText = data.display_name;
				this.country.innerText = data.country;
				this.email.innerText = data.email;
			}),

			// ARTIST
			this.source.getArtist('1dfeR4HaWDbWqFHLkxsg1d').then((data) => {
				this.artist.innerText = data.name;
				this.artist_img.src = data.image;
			}),

			// ALBUMS
			this.source.getAlbums('1dfeR4HaWDbWqFHLkxsg1d').then((data) => {
				let albumsHTML = '';
				data.forEach(item => {
					albumsHTML += `<li><img src="${item.image}" alt="" width="25px">${item.name}</li>`;
				});

				this.albums.innerHTML = albumsHTML;
			}),

			// TRACKS
			this.source.getTracks('6i6folBtxKV28WX3msQ4FE').then((data) => {
				let tracksHTML = '';
				data.forEach(item => {
					tracksHTML += `<li>${item.track_number}) ${item.name}</li>`;
				});

				this.tracks.innerHTML = tracksHTML;
			})

		])
		.then(() => this.loadingOff())
		.catch(e => {
			console.log('Error from app.js', e);
		});

	}


	// UI
	refreshLoading() {
		this.loading.style.display = this._loading ? 'block' : 'none';
		this.content.style.display = this._loading ? 'none' : 'block';
	}

	loadingOff() {
		this._loading = false;
		this.refreshLoading();
	}

	loadingOn() {
		this._loading = true;
		this.refreshLoading();
	}

	// end UI

}
