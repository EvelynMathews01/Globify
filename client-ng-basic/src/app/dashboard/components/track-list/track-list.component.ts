import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { MusicService } from '../../../services/music.service';
import { Track } from '../../entities/track';
import { Album } from '../../entities/album';

@Component({
	selector: 'gl-track-list',
	templateUrl: 'track-list.component.html'
})

export class TrackListComponent implements OnChanges {
	@Input() album: Album;
	tracks: Track[] = [];

	constructor(private musicService: MusicService) {

	}

	ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
		// console.log('changes', changes);
		if (changes.album) {
			this.findTracks(this.album);
		}
	}

	findTracks(album: Album) {
		// console.log('find tracks', album);
		this.musicService.getTracks(album)
		.subscribe(tracks => {
			this.tracks = tracks;
		});
	}
}
