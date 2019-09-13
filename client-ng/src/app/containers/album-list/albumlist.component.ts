import { Component, OnInit, Input, OnChanges, SimpleChange, EventEmitter, Output } from '@angular/core';
import { Album } from 'src/app/entities/album';
import { MusicService } from 'src/app/services/music.service';
import { Artist } from 'src/app/entities/artist';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'gl-albumlist',
  templateUrl: './albumlist.component.html',
  styleUrls: ['./albumlist.component.scss']
})
export class AlbumListComponent implements OnChanges {
  @Input() artistReceived: Artist;
  @Output() onAlbumSelected = new EventEmitter<Artist>();

  albums: Album[] = [];
  albumSelected: Album;

  constructor(private musicService: MusicService) {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.artistReceived) {
      this.findAlbums(this.artistReceived);
    }
  }

  findAlbums(artistReceived: Artist) {
    this.musicService.getAlbum(this.artistReceived)
      .subscribe(albums => {
        this.albums = albums;
      });
  }
  albumClicked(album: Album) {
    this.albumSelected = album;
    console.log(this.albumSelected);
    this.onAlbumSelected.emit(this.albumSelected);
  }
}
