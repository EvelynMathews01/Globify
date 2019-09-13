import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { Navbar } from './components/Navbar/navbar.component';
import { config } from './common/config';
import { Source } from './API';

export default class App {
	source = {};
	_loading = true;

	profileName = document.querySelector('#profile-name');
	artistList = document.querySelector('#artists-list');
	loading = document.querySelector('#loading');
	content = document.querySelector('#content');
	profileImage = document.querySelector('#profile-image');
	albumsListDesktop = document.querySelector('#albums-list-desktop');
	albumsListMobile = document.querySelector('#albums');
	songList = document.querySelector('#song-list');
	search = document.querySelector('#search');

	constructor() {
		const urlParams = new URLSearchParams(location.search);
		let token = urlParams.get('t');

		this.source = new Source({
			provider: config.provider,
			token
		});

		this.getData();
		this.setEvents();
	}
	setEvents() {
		//handling Search
		this.search.addEventListener('input', event => {
			if (event.target.value.length > 0) {
				setTimeout(this.searchResult(event.target.value), 1000);
			} else {
				this.artistList.innerHTML = '';
				this.getData();
			}
		});

		//handling Navbar
		Navbar.arrow.addEventListener('click', () => {
			Navbar.menu.classList.toggle('open');
			Navbar.setWidth();
		});
		window.addEventListener('resize', Navbar.setWidth());
	}

	getData() {
		Promise.all([

			this.source.getUser()
			.then(user => {
				this.profileName.innerText = user.displayName;
				this.profileImage.setAttribute('src', user.imageUrl);
			}),

			this.source.getTopArtistsFromUser()
			.then(artists => {
				this.artistList.appendChild(new ArtistsListComponent(artists).render(this.source));
			})

		]).then(() => {
			setTimeout(() => {
				this.loadingOff();
			}, 200);
		}).catch(e => {
			console.error('Error!', e);
		});
	}

	searchResult(value) {

		this.source.search(value)
		.then(artists => {
			this.artistList.innerHTML = '';
			this.artistList.appendChild(new ArtistsListComponent(artists).render(this.source));
		});

		// TODO @lea reutilizar lo de arriba todo lo que se pueda
		// this.source.search(value).then(artists => {
		// 	this.artistList.innerHTML = '';
		// 	artists.forEach(artist => {
		// 		this.artistList.insertAdjacentHTML('beforeend', artist.renderDesktop());

		// 		this.artistList.lastElementChild.addEventListener('click', e => {
		// 			for (let child of this.artistList.children) {
		// 				child.classList.remove('active');
		// 			}
		// 			e.currentTarget.classList.toggle('active');
		// 			document.querySelector('#artist-title').innerText =
		// 				e.currentTarget.querySelector('#artist-title-box').innerText;

		// 			this.source.getAlbums(artist.id).then(albums => {
		// 				albums.forEach(albumPromise => {
		// 					this.albumsListDesktop.innerHTML = '';
		// 					this.albumsListMobile.innerHTML = '';

		// 					albumPromise.then(album => {

		// 						this.albumsListDesktop
		// 						.insertAdjacentHTML('beforeend', album.renderDesktop());
		// 						this.albumsListMobile
		// 						.insertAdjacentHTML('beforeend', album.renderMobile());

		// 						this.albumsListDesktop.lastElementChild.addEventListener('click', e => {
		// 							e.currentTarget.classList.toggle('active');
		// 							for (const child of e.currentTarget.children) {
		// 								if (child.id === 'album-songs-list') {
		// 									child.classList.toggle('hide');
		// 								}
		// 							}
		// 						});

		// 						this.albumsListMobile.lastElementChild.addEventListener('click', e => {
		// 							this.songList.innerHTML = album.renderSongs();
		// 							document.querySelector('#album-title').innerText =
		// 								e.currentTarget.querySelector('#title').innerText;
		// 						});

		// 					});
		// 				});
		// 			});
		// 		});
		// 	});
		// });
	}

	refreshLoading() {
		this.loading.style.display = this._loading ? 'block' : 'none';
		this.content.style.display = this._loading ? 'none' : 'flex';
	}

	loadingOff() {
		this._loading = false;
		this.refreshLoading();
	}

	loadingOn() {
		this._loading = true;
		this.refreshLoading();
	}

}
