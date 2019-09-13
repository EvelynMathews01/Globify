import { Injectable } from '@angular/core';
import { MusicProvider } from './musicProvider.interface';
import { SpotifyService } from './spotify.service';
import { Artist } from '../dashboard/entities/artist';
import { Album } from '../dashboard/entities/album';
import { Track } from '../dashboard/entities/track';
import { Observable } from 'rxjs';
import { User } from '../common/entities/user';

@Injectable()
export class MusicService {
	provider: MusicProvider;

	constructor(spotify: SpotifyService) {
		this.provider = spotify;
	}

	public getUserProfile(): Observable<User> {
		return this.provider.getUserProfile();
	}

	public getTopArtistsFromUser(): Observable<Artist[]> {
		return this.provider.getTopArtistsFromUser();
	}

	public getArtist(artist_id): Observable<Artist> {
		return this.provider.getArtist(artist_id);
	}

	public getAlbums(artist: Artist): Observable<Album[]> {
		return this.provider.getAlbums(artist);
	}

	public getTracks(album: Album): Observable<Track[]> {
		return this.provider.getTracks(album);
	}
}
