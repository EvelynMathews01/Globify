import { MusicProvider } from './musicProvider.interface';
import { Injectable } from '@angular/core';
import { Track } from '../dashboard/entities/track';
import { Album } from '../dashboard/entities/album';
import { Artist } from '../dashboard/entities/artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../common/entities/user';
import { AuthService } from './auth.service';

@Injectable()
export class SpotifyService implements MusicProvider {
	api = environment.spotify.url;
	httpOptions: {};

	constructor(private http: HttpClient, private auth: AuthService) {
		this.httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this.auth.getToken()}`
			})
		};
	}

	public getUserProfile(): Observable<User> {
		return this.http.get<User>(`${this.api}me`, this.httpOptions)
		.pipe(
			// tap((user: any) => {
			// 	console.log('user fetched', user);
			// }),
			map((user: any) => {
				return {
					id: user.id,
					name: user.display_name,
					country: user.country,
					email: user.email,
					image: this.getImage(user)
				};
			}),
			// tap((user: any) => {
			// 	console.log('user fetched', user);
			// }),
			catchError(this.handleError<User>('getUserProfile'))
		);
	}

	public getTracks(album: Album): Observable<Track[]> {
		return this.http.get<Track[]>(`${this.api}albums/${album.id}/tracks?limit=2`, this.httpOptions)
		.pipe(
			// tap((tracks: Track[]) => {
			// 	console.log('tracks fetched', tracks);
			// }),
			map((tracks: any) => {
				let r: Track[];
				if (tracks.items.length > 0) {
					r = tracks.items.map(track => {
						return {
							id: track.id,
							name: track.name,
							trackNumber: track.track_number,
							duration: track.duration_ms
						};
					});
				}
				return r;
			}),
			// tap((tracks: Track[]) => {
			// 	console.log('tracks fetched', tracks);
			// }),
			catchError(this.handleError<Track[]>('getTracks'))
		);
	}

	public getAlbums(artist: Artist): Observable<Album[]> {
		return this.http.get<Album[]>(`${this.api}artists/${artist.id}/albums?limit=2&market=ar`, this.httpOptions)
		.pipe(
			// tap((albums: Album[]) => {
			// 	console.log('albums fetched', albums);
			// }),
			map((albums: any) => {
				let r: Album[];
				if (albums.items.length > 0) {
					r = albums.items.map(album => {
						return {
							id: album.id,
							name: album.name,
							image: this.getImage(album)
						};

					});
				}
				return r;
			}),
			// tap((albums: Album[]) => {
			// 	console.log('albums fetched', albums);
			// }),
			catchError(this.handleError<Album[]>('getAlbums'))
		);
	}

	public getArtist(artist_id): Observable<Artist> {
		return this.http.get<Artist>(`${this.api}artists/${artist_id}?market=ar`, this.httpOptions)
		.pipe(
			// tap((artist: Artist) => {
			// 	console.log('artist fetched', artist);
			// }),
			catchError(this.handleError<Artist>('getArtist'))
		);
	}

	public getTopArtistsFromUser(): Observable<Artist[]> {
		return this.http.get<Artist[]>(`${this.api}me/top/artists?limit=2`, this.httpOptions)
		.pipe(
			// tap((artists: Artist[]) => {
			// 	console.log('artist fetched', artists);
			// }),
			map((artists: any) => {
				let r: Artist[];
				if (artists.items.length > 0) {
					r = artists.items.map(artist => {
						return {
							id: artist.id,
							name: artist.name,
							image: this.getImage(artist)
						};

					});
				}
				return r;
			}),
			// tap((artists: Artist[]) => {
			// 	console.log('artist fetched', artists);
			// }),
			catchError(this.handleError<Artist[]>('getTopArtistsFromUser'))
		);
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {
			console.error(error); // log to console instead
			return of(result as T);
		};
	}


	private getImage(resource) {
		let img = 'assets/img/no-image.png';

		if (resource.images.length > 0) {
			img = resource.images[0].url;
		}

		return img;
	}

}
