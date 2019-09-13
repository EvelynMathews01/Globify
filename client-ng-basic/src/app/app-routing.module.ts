import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPage } from './404.page';
import { ArtistPage } from './artist/artist.page';

const routes: Routes = [
	{path: 'artists/:id', component: ArtistPage},
	{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
	{path: '**', component: NotFoundPage}
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes
			// , { enableTracing: true }
		)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
