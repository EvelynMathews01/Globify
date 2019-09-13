import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'gl-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  constructor(private musicService: MusicService) {
    this.musicService.getUser()
    .subscribe( data =>
      // console.log(123)
      this.user = data
    );
  }

  ngOnInit(): void { }
}
