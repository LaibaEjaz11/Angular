import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UsermanagmentComponent } from "./usermanagment/usermanagment.component";
import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
//If you generated a component 
@NgModule({
    declarations:[
        AppComponent,UsermanagmentComponent,EventComponent
    ],
    imports:[
        BrowserModule
    ],
    providers:[],
    bootstrap:[AppComponent]
})
export class AppModule{}