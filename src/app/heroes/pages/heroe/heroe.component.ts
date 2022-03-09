import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';  

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`

    img {
      width: 100%;
      border-radius: 2px;
    }
  
  `
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroesService: HeroesService,
               private router: Router
            ) { }

  ngOnInit(): void {

    // this.params = this.activatedRoute.snapshot.params;
    // this.activatedRoute.params.subscribe( ({id}) => {
    //       this.heroesService.getHeroeById( id )
    //         .subscribe( heroe => this.heroe = heroe )    
    //     }    
    //   )

    // ||

    this.activatedRoute.params.pipe( switchMap( ({id})=> this.heroesService.getHeroeById( id ) ) )
      .subscribe( heroe => this.heroe = heroe );   
    

  }

  volver() {
    this.router.navigate(['/heroes/listado'])
  }

  

}
