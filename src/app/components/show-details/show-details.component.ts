import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowsService } from '../../services/tv-shows.service'; // Asegúrate de que tienes este servicio
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-details',
  standalone: true,
  imports: [],
  templateUrl: './show-details.component.html',
  styleUrl: './show-details.component.css'
})
export class ShowDetailsComponent {

  public show!: Show; // Usar '!' para indicar que no será null
  public showId: number = 0; // Inicializado con un valor predeterminado

  constructor(private route: ActivatedRoute, private tvShowsService: TvShowsService) {}

  ngOnInit(): void {
    this.showId = Number(this.route.snapshot.paramMap.get('id'))!;
    this.show = this.tvShowsService.getShowById(this.showId); // Asume que este método lanzará un error si no encuentra el show
  }

}
