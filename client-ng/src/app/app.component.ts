import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'asd';
  t: string;

  constructor(private route: ActivatedRoute, private auth: AuthService) {
    //   this.route.queryParams.subscribe(params => {
    //     console.log(params);
    //     this.t = params['t'];
    //     console.log(this.t);
    //     // this.param2 = params['param2'];
    // });
    // .pipe(map(params => params.get('t') || 'None')).subscribe(params => {
    //   this.t = params['t'];
    //   return this.auth.setToken(this.t);
    // })
  }
  ngOnInit() {
    // this.auth.setToken(this.route.snapshot.queryParams['t']);
  }
}
