import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public value:number=0;
  public counter(str:string){ //add
    (str==='add') ? this.value++ :this.value--;
    //Comaprision Operator == Matching Value
    //Identical Opertaor === Matching Type and Value
    //Ternary Operator
  }
}
