import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
title = 'Laiba Ejaz';
public name = '';
myEvent(){
  return 12;
}
my_function(){
  alert('Hello..! This is Laiba');
}
myfunction(){
  console.log('Laiba Ejaz');
}
mynamefunction(){
  this.name='Laiba Ejaz'
}
argumentfunc(name:string){
alert(name);
}
twoargumentfunc(name:string ,age:number){
  alert(name + " " + age);
}
}
