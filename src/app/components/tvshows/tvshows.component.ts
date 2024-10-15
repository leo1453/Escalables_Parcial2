import { Component, inject } from '@angular/core';
import { ShowCardComponent } from "../show-card/show-card.component";
import { Show } from '../../interfaces/show.interface';
import { NgFor, NgIf } from '@angular/common';
import { TvShowsService } from '../../services/tv-shows.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tvshows',
  standalone: true,
  imports: [ShowCardComponent, NgIf, NgFor, FormsModule], 
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent {
  private tvShowsService = inject(TvShowsService);

  public categories: string[] = []; 
  public selectedCategory: string = ''; 

  public get text(): string {
    return this.tvShowsService.text;
  }

  constructor() {
    this.tvShowsService.fetchTvshows();
  }

  public get shows(): Show[] {
    return this.tvShowsService.shows.filter(show => 
      this.selectedCategory ? show.category === this.selectedCategory : true
    );
  }


}
