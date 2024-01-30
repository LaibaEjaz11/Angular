import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsermanagmentComponent } from './usermanagment/usermanagment.component';
import { EventComponent } from './event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsermanagmentComponent,EventComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

}
