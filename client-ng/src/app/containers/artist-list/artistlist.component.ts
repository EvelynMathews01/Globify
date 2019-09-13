import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/entities/artist';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-artist-list',
  templateUrl: './artistlist.component.html',
  styleUrls: ['./artistlist.component.scss']
})
export class ArtistListComponent implements OnInit {

  @Output() onArtistSelected = new EventEmitter<Artist>();
  artists: Artist[] = [];
  artistSelected: Artist;


  constructor(private musicService: MusicService) {
   }

  ngOnInit(): void {
    this.musicService.getTopArtistsFromUser()
    .subscribe( data => {
      this.artists = data;
    });
  }

  artistClicked(artist: Artist) {
    this.artistSelected = artist;
    this.onArtistSelected.emit(this.artistSelected);
  }
}
