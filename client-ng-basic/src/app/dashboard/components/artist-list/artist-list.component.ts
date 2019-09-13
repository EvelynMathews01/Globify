import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Artist } from '../../entities/artist';
import { MusicService } from '../../../services/music.service';

@Component({
	selector: 'gl-artist-list',
	templateUrl: 'artist-list.component.html'
})

export class ArtistListComponent implements OnInit {
	@Output() onArtistSelected = new EventEmitter<Artist>();
	artists: Artist[] = [];
	artistSelected: Artist;

	constructor(private musicService: MusicService) {

	}

	ngOnInit() {
		this.musicService.getTopArtistsFromUser()
		.subscribe(artists => {
			this.artists = artists;
		});
	}

	artistClicked(artist: Artist) {
		// console.log('ar', artist);
		this.artistSelected = artist;
		this.onArtistSelected.emit(this.artistSelected);

	}
}
