import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Artist } from 'src/app/entities/artist';

@Component({
  selector: 'gl-artist-box',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistBoxComponent implements OnInit {
  @Input() artist: Artist[];
  @Output() id = new EventEmitter<number>();
  constructor() {
    // console.log(this.id);
   }

  ngOnInit(): void {
    // this.getId();
   }

  //  getId() {

  //    this.id.emit(this.artist[0].id);
  //    console.log(this.artist[0].id);
  //  }


}
