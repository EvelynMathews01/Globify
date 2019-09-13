import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { Track } from 'src/app/entities/track';
import { MusicService } from 'src/app/services/music.service';
import { Album } from 'src/app/entities/album';

@Component({
  selector: 'gl-tracklist',
  templateUrl: './tracklist.component.html',
  styleUrls: ['./tracklist.component.scss'],
})
export class TrackListComponent implements OnChanges {
  @Input() albumReceived: Album;
  tracks: Track[] = [];

  constructor(private musicService: MusicService) {
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    if (changes.albumReceived) {
      this.findTracks(this.albumReceived);
    }
  }
  findTracks(albumReceived: Album) {
    this.musicService.getTracks(this.albumReceived)
    .subscribe(tracks => {
      this.tracks = tracks;
      console.log(tracks);
    });
  }
}
