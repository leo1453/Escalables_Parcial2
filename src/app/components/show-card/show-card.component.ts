import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Show } from '../../interfaces/show.interface';
import { NgClass, NgIf } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
@Output()
public deleteCard : EventEmitter<string> = new EventEmitter();

@Input()
public show: Show = {
  id: 0, 
  title: "", 
  price: 0, 
  description: "", 
  category: "", 
  image: "", 
  rating: {
    rate: 0, 
    count: 0 
  }
};


public isSelected : boolean = false;
constructor(private router: Router) {} 

public changeSelected() : void{
this.isSelected = !this.isSelected;
if (this.isSelected) {
  this.router.navigate(['/show-details', this.show.id]);
}
}


}
