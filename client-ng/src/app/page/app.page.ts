import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { Artist } from '../entities/artist';
import { Album } from '../entities/album';

@Component({
  selector: 'gl-page',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss']
})
export class PageComponent implements OnInit {
  artistSelected: Artist;
  albumSelected: Album;

  constructor(private route: ActivatedRoute, private auth: AuthService) {
    // console.log(this.auth.setToken(this.route.snapshot.queryParams['t']));
    this.auth.setToken(this.route.snapshot.queryParams['t']);
  }
  ngOnInit(): void {
  }

  onArtistSelected(artist: Artist) {
    this.artistSelected = artist;
  }

  onAlbumSelected(album: Album) {
    this.albumSelected = album;
    // console.log(this.albumSelected);
  }

}
