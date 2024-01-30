import { Component } from '@angular/core';

@Component({
  selector: 'app-interporation',
  standalone: true,
  imports: [],
  templateUrl: './interporation.component.html',
  styleUrl: './interporation.component.css'
})
export class InterporationComponent {
  public title:string = 'new_app';
  public name:string = 'Linta Shahzad';
  public num1:number  = 2;
  protected num2 : number = 3 ;
  public hellomsg(){
    return 'Hello everyone ...!';
 
  }
}
