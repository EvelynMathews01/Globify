import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../../entities/album';

@Component({
	selector: 'gl-album',
	templateUrl: 'album.component.html',
	styleUrls: ['album.component.scss']
})

export class AlbumComponent implements OnInit {
	@Input() album: Album;


	constructor() {
	}

	ngOnInit() {
	}
}
