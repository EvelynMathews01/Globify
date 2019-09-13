import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/entities/album';

@Component({
  selector: 'gl-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {
  @Input() album: Album[];

  statusFlag = false;
  constructor() {
  }

  ngOnInit(): void { }

  setFlag() {
    this.statusFlag = !this.statusFlag;
  }
}
