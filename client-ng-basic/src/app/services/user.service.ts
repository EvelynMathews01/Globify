import { Injectable } from '@angular/core';
import { User } from '../common/entities/user';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { MusicService } from './music.service';

@Injectable()
/**
 * Simular que viene de un server propio y no de spotify
 */
export class UserService {
	api = environment.spotify.url;
	user: User;

	constructor(private musicService: MusicService) {

	}


	public getUserProfile(): Observable<User> {
		let r: Observable<User>;

		if (this.user) {
			console.log('recuperado de cache:', this.user);
			r = of(this.user);
		} else {
			r = this.musicService.getUserProfile()
			.pipe(
				tap((user: User) => {
					this.user = user;
					return this.user;
				})
			);
		}

		return r;
	}
}
