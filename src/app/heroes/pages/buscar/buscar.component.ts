import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';

  heroes: Heroe[] = [];
  heroeSel!: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
  }

  buscando(){

    this.heroesService.getSugerencias( this.termino.trim() ).subscribe(heroes => this.heroes = heroes )

  }

  opcionSeleccionada( event: any){
    // console.log(event)
    if( !event.option.value){

      this.heroeSel = undefined;
      return;

    } 

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById( heroe.id! ).subscribe( heroe => this.heroeSel = heroe ) 
  }

}
