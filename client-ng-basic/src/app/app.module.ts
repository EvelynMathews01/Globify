import { NgModule } from '@angular/core';
import { MusicService } from './services/music.service';
import { AppPage } from './app.page';
import { SpotifyService } from './services/spotify.service';
import { CommonModule as LocalCommonModule } from './common/common.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserService } from './services/user.service';
import { NotFoundPage } from './404.page';
import { ArtistPage } from './artist/artist.page';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [
		AppPage,
		NotFoundPage,
		ArtistPage
	],
	imports: [
		LocalCommonModule,
		DashboardModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [
		MusicService,
		AuthService,
		SpotifyService,
		UserService
	],
	bootstrap: [AppPage]
})
export class AppModule {
}
