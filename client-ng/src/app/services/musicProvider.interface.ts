import { Track } from './../entities/track';
import { Album } from './../entities/album';
import { Artist } from './../entities/artist';
import { User } from '../entities/user';
import { Observable } from 'rxjs';

export interface MusicProvider {
  getArtist(): Observable<Artist[]>;
  getTopArtistsFromUser(): Observable<Artist[]>;
  getTracks(album: Album): Observable<Track[]>;
  getAlbums(artist: Artist): Observable<Album[]>;
  getUser(): Observable<User>;
}
