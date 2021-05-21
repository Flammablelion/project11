import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyCards } from './dhared/models/cards.model.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
@ViewChild("inputName") inputName: ElementRef;

  blockX = 0;
  blockY = 0;
  title = 'project11';
  inputValue:string;
  card: MyCards[];
  
  addCard(){
    this.card.push();
    let length = this.card.length;
    this.card[length].id =length;
    this.card[length].name = this.inputName.nativeElement.value;
  }

  // getCords(e: MouseEvent) {
  //   this.blockX = e.offsetX;
  //   this.blockY = e.offsetY;
  // }
}
