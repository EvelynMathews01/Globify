import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'gl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  show = true;

  constructor() {

  }

  ngOnInit(): void { }
  toggle() {
    this.show = !this.show;
  }
}
