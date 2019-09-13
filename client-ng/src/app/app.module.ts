import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistBoxComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackComponent } from './components/track/track.component';
import { TrackListComponent } from './containers/track-list/tracklist.component';
import { SidebarComponent } from './containers/sidebar/sidebar.component';
import { ArtistListComponent } from './containers/artist-list/artistlist.component';
import { AlbumListComponent } from './containers/album-list/albumlist.component';
import { HeaderComponent } from './containers/header/header.component';
import { MusicService } from './services/music.service';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth-service';
import { PageComponent } from './page/app.page';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ArtistBoxComponent,
    TrackComponent,
    SearchComponent,
    ProfileComponent,
    NavbarComponent,
    TrackListComponent,
    SidebarComponent,
    ArtistListComponent,
    AlbumListComponent,
    HeaderComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    MusicService,
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
