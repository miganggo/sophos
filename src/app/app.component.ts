import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';

  flag: boolean = true;

  misDatos: any ={
    nombre: 'Miguel González',
    cargo: 'Software Developer',
    celular: "300 0000 000"
  }

  participantes: string[] = ["Carito", "Alexa", "Hugo", "Ruben"];


}