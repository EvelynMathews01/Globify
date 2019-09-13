import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Album } from '../../entities/album';
import { Artist } from '../../entities/artist';

@Component({
	selector: 'gl-album-list',
	templateUrl: 'album-list.component.html'
})

export class AlbumListComponent implements OnChanges {
	@Output() onAlbumSelected = new EventEmitter<Artist>();
	@Input() artist: Artist;
	albums: Album[] = [];
	albumSelected: Album;

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		// console.log('changes', changes);
		if (changes.artist) {
			this.findAlbums(this.artist);
		}
	}

	constructor(private musicService: MusicService) {
	}

	findAlbums(artist: Artist) {
		this.musicService.getAlbums(artist)
		.subscribe(albums => {
			this.albums = albums;
		});
	}

	albumClicked(album: Album) {
		// console.log('album', album);
		this.albumSelected = album;
		this.onAlbumSelected.emit(this.albumSelected);
	}
}
