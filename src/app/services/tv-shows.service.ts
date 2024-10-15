import { inject, Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

    private http = inject(HttpClient);
    private apiUrl = "https://fakestoreapi.com/products";

  public text: string = "Products for sale";

  private _shows: Show[] =[];

  constructor(){
   
  }


    public get shows(): Show[]{
      return this._shows;
    }

    public fetchTvshows() {
        this.http.get<Show[]>(this.apiUrl).subscribe({
            next: (response)=>{
                console.log(response);
                this._shows = response;
            },
            error: (error)=>{
                console.log(error);
            }
        })
    }

    public deleteElement(name :string) : void{
      this._shows=this.shows.filter(show => show.title != name);
      }

public getShowById(id: number): Show {
  const show = this.shows.find(show => show.id === id);
  
  if (!show) {
    throw new Error(`Show with id ${id} not found`); 
  }
  
  return show;
}

}
