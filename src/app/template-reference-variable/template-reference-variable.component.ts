import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  standalone: true,
  imports: [],
  templateUrl: './template-reference-variable.component.html',
  styleUrl: './template-reference-variable.component.css'
})
export class TemplateReferenceVariableComponent {
  public displayname = '';
  public keyupname = '';
  public boxname = '';
  displaynames(name:string){
    this.displayname = name;
  }
  keyupnames(name:string){
    this.boxname=name;
    console.log(name);
  }
  getName(name:string){
    console.log(name);
  }
}
