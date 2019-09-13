import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../entities/artist';

@Component({
	selector: 'gl-artist',
	templateUrl: 'artist.component.html',
	styleUrls: ['artist.component.scss']
})

export class ArtistComponent implements OnInit {
	@Input() artist: Artist;

	constructor() {
	}

	ngOnInit() {

	}

}
