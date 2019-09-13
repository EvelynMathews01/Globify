import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Artist } from './entities/artist';
import { Album } from './entities/album';

@Component({
	templateUrl: 'dashboard.page.html'
})

export class DashboardPage implements OnInit {
	artistSelected: Artist;
	albumSelected: Album;

	constructor(private route: ActivatedRoute, private auth: AuthService) {
		// intencional en el constructor
		this.auth.setToken(this.route.snapshot.queryParams['t']);
	}

	ngOnInit() {
	}

	onArtistSelected(artist: Artist) {
		// console.log('desde dashboard');
		this.artistSelected = artist;
		this.albumSelected = null;
	}

	onAlbumSelected(album: Album){
		// console.log('album', album);
		this.albumSelected = album;
	}
}
