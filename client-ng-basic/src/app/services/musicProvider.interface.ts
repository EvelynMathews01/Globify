import { Track } from '../dashboard/entities/track';
import { Album } from '../dashboard/entities/album';
import { Artist } from '../dashboard/entities/artist';
import { Observable } from 'rxjs';
import { User } from '../common/entities/user';

export interface MusicProvider {
	getUserProfile(): Observable<User>;

	getTopArtistsFromUser(): Observable<Artist[]>;

	getArtist(artist_id): Observable<Artist>;

	getAlbums(artist: Artist): Observable<Album[]>;

	getTracks(album: Album): Observable<Track[]>;


}

