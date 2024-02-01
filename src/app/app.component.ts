import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsermanagmentComponent } from './usermanagment/usermanagment.component';
import { EventComponent } from './event/event.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsermanagmentComponent,CounterComponent,TemplateReferenceVariableComponent,EventComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

}
