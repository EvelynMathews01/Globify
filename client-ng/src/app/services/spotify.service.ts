import { Injectable } from '@angular/core';

import { AuthService } from './auth-service';
import { MusicProvider } from './musicProvider.interface';
import { environment } from './../../environments/environment';

import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Album } from '../entities/album';
import { Artist } from '../entities/artist';
import { Track } from './../entities/track';
import { User } from '../entities/user';


@Injectable()
export class SpotifyService implements MusicProvider {
  api = environment.SERVER_URL;
  httpOptions: {};

  constructor(private http: HttpClient, private auth: AuthService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };
  }
  getTopArtistsFromUser(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.api}me/top/artists`, this.httpOptions)
      .pipe(
        // tap((artists: Artist[]) => {
        //   console.log(artists);
        // }),
        map((artists: any) => {
          let obj: Artist[];
          if (artists.items.length > 0) {
            obj = artists.items.map(artist => {
              return {
                id: artist.id,
                name: artist.name,
                image: this.getImg(artist),
              };
            });
            return obj;
          }
        })
      );
  }

  getArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(this.api + 'artist')
      .pipe(
        catchError(this.handleError<Artist[]>('getArtist'))
      );
  }

  getAlbums(artist: Artist): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.api}artists/${artist.id}/albums?market=ar`, this.httpOptions)
      .pipe(
        // tap((albums: Album[]) => {
        //   console.log('album fetched');
        // })
        map((albums: any) => {
          let obj: Album[];
          if (albums.items.length > 0) {
            obj = albums.items.map(album => {
              return {
                id: album.id,
                name: album.name,
                img: this.getImg(album),
              };
            });
          }
          return obj;
        }),
        catchError(this.handleError<Album[]>('getAlbums'))
      );
  }

  getTracks(albums: Album): Observable<Track[]> {
    return this.http.get<Track[]>(`${this.api}albums/${albums.id}/tracks?market=ar`, this.httpOptions)
      .pipe(
        map((tracks: any) => {
          let obj: Track[];
          if (tracks.items.length > 0) {
           obj = tracks.items.map(track => {
             return {
                id: track.id,
                name: track.name,
                trackNumber: track.track_number,
                duration: track.duration_ms
              };
           });
          }
          return obj;
        })
      )
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.api}me`, this.httpOptions)
      .pipe(
        map((user: any) => {
          // console.log(user);
          return {
            id: user.id,
            name: user.display_name,
            country: user.country,
            email: user.email,
            image: this.getImg(user)
          };
        }),
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  private getImg(data) {
    let img = './../assets/img/no-image.png';

    if (data.images.length > 0) {
      img = data.images[0].url;
    }

    return img;
  }

}
