import { Component, Input } from '@angular/core';
 
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {
 
  @Input('isFlipped') flipCard: boolean;

  @Input() public frontContent : string;
 @Input() public backContent : string;
 
  constructor() {
 
  }

  public flip() {
       this.flipCard = !this.flipCard;
     }
 
}