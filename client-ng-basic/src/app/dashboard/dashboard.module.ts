import { NgModule } from '@angular/core';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackComponent } from './components/track/track.component';
import { DashboardPage } from './dashboard.page';
import { CommonModule } from '../common/common.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ArtistSubPage } from './artist.sub.page';
import { ArtistListComponent } from './components/artist-list/artist-list.component';

const components = [
	ArtistComponent,
	ArtistListComponent,
	AlbumComponent,
	TrackComponent,
	AlbumListComponent,
	TrackListComponent,
	DashboardPage,
	ArtistSubPage
];

@NgModule({
	imports: [
		CommonModule,
		DashboardRoutingModule
	],
	exports: [
	],
	declarations: [
		...components
	],
	providers: []
})
export class DashboardModule {
}
