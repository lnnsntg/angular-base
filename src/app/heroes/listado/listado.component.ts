import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Superman', 'Hulk', 'Thor', 'Ironman'];
  heroeBorrado: string = "";

  borrar() {
    this.heroeBorrado = this.heroes.shift() || "";

  }
}
