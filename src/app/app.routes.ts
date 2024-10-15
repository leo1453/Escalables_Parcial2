import { RouterModule, Routes } from '@angular/router';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: "tvshows", component: TvshowsComponent},
    {path: "tvshow", redirectTo: "tvshows", pathMatch: "full"},
    {path: "", redirectTo: "tvshows", pathMatch: "full"},
    //{path: "not-found", component: NotFoundComponent},
    //{path: "**", redirectTo: "not-found", pathMatch: "full"},
    { path: 'show-details/:id', component: ShowDetailsComponent },


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }